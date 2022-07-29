import {renderToStaticMarkup} from 'react-dom/server';
import pdf from 'html-pdf';
import HighlightTemplate from "./template";

const componentToPDFBuffer = (props) => {
    return new Promise((resolve, reject) => {
        const html = renderToStaticMarkup(<HighlightTemplate {...props} />);

        const options = {
            format: 'A4',
            orientation: 'portrait',
            border: '10mm',
            footer: {
                height: '10mm',
            },
            type: 'pdf',
            timeout: 30000,
        };

        pdf.create(html, {
            ...options, phantomPath: process.cwd() + "/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
        }).toBuffer((err, buffer) => {
            if (err) {
                return reject(err);
            }

            return resolve(buffer);
        });
    });
}

export default {
    componentToPDFBuffer
}
