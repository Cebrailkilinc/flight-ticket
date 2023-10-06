const tarihFormati: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export const handleDateFormat = (tarih: any) => {
    if (tarih) {
        return new Date(tarih).toLocaleDateString('tr', tarihFormati);
    }
    return '';
};