const download = (file, filename = 'download') => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(file);
    link.download = `${filename}.pdf`;
    link.click();
    link.remove();
}

export default download;
