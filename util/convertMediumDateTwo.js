const convertMediumDateTwo = (string) => {
    const date = new Date(string);
    const time = date.getTime();/*  - (5 * 60 * 60 * 1000); */
    const newDate = new Date(time);
    return newDate.getFullYear() + '-' + ("0" + (newDate.getMonth() + 1)).slice(-2) + '-' + ("0" + (newDate.getDate())).slice(-2) + 'T' + ("0" + (newDate.getHours())).slice(-2) + ':' + ("0" + (newDate.getMinutes())).slice(-2) + ':' + ("0" + (newDate.getSeconds())).slice(-2) + '-05:00';
};
export { convertMediumDateTwo };