import parseCSV from "../../utils/parse-csv";
import axios from 'axios';
import {load} from 'cheerio';
import pdfHelper from '../../utils/pdf-helper'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const parsedCSV = parseCSV(req.body.csv);
        const amazonBookHtml = await axios(parsedCSV.bookLink);
        const $ = load(amazonBookHtml.data);
        const bookCover = $('img')[1].attribs.src;

        const buffer = await pdfHelper.componentToPDFBuffer({highlights: parsedCSV.highlight, bookCover});
        res.setHeader('Content-disposition', 'attachment;');
        res.setHeader('Content-Type', 'application/pdf');
        res.end(buffer);
        // ejs.renderFile(template, {students: parsedCSV.highlight, bookCover}, (err, data) => {
        //     if (err) {
        //         res.send(err);
        //     } else {
        //         let options = {
        //             "header": {
        //                 "height": "20mm"
        //             },
        //             "footer": {
        //                 "height": "20mm",
        //             },
        //         };
        //         pdf.create(data, options).toBuffer(function (err, buffer) {
        //             if (err) {
        //                 res.send(err);
        //             } else {
        //                 res.setHeader('Content-Type', 'application/pdf')
        //                 res.send(buffer)
        //             }
        //         });
        //     }
        // });
    }
}

