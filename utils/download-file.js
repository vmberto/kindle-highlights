const download = (filename = 'download') => {
    const link = document.createElement('a');
    link.href = '/highlight.pdf';
    link.download = `${filename}.pdf`;
    link.click();
    link.remove();
}

export default download;
