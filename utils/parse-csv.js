const parseCSV = (text) => {
    let p = "",
        row = [""],
        csvArray = [row],
        i = 0,
        r = 0,
        s = !0;
    for (let l of text) {
        if ('"' === l) {
            if (s && l === p) row[i] += l;
            s = !s;
        } else if (";" === l && s) l = row[++i] = "";
        else if ("\n" === l && s) {
            if ("\r" === p) row[i] = row[i].slice(0, -1);
            row = csvArray[++r] = [(l = "")];
            i = 0;
        } else row[i] += l;
        p = l;
    }
    csvArray.map((row) => {
        const [first, second, third, ...rest] = row[0].split(',');
        row[0] = row[0].replace(",,,", "")
        if (second) {
            row[0] = [
                first,
                second,
                third,
                rest.join(',')
            ].map(item => item.replace(/"/g, ""))
        }
    });

    csvArray = csvArray.map(row => row[0]);
    let [_, bookTitle, author, __, bookLink, ___, ____, ...highlight] = csvArray;

    highlight = highlight.map(h => {
        const [type, position, stars, text] = h;
        return {
            type,
            position,
            stars,
            text
        }
    })


    return {bookTitle, author, bookLink, highlight};
}

export default parseCSV;
