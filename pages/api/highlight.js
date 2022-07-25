import parseCSV from "../../utils/parse-csv";
import ejs from "ejs";
import pdf from "html-pdf";
import path from 'path';
import axios from 'axios';
import { load } from 'cheerio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const template = path.join(process.cwd(), 'utils', '/template.ejs');
    const parsedCSV = parseCSV(req.body.csv);

    const amazonBookHtml = await axios(parsedCSV.bookLink);
    const $ = load(amazonBookHtml.data);
    const bookCover = $('img')[1].attribs.src;

    ejs.renderFile(template, { students: parsedCSV.highlight, bookCover }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        let options = {
          "header": {
            "height": "20mm"
          },
          "footer": {
            "height": "20mm",
          },
        };
        pdf.create(data, options).toStream(function (err, stream) {
          if (err) {
            res.send(err);
          } else {
            stream.pipe(res);
          }
        });
      }
    });
  }
}
