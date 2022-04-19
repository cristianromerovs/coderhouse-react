export const getCurrentDate = () => {
    let date = new Date();
    let dateDay = date.getDate();
    let dateMonth = date.getMonth() + 1;
    let dateYear = date.getFullYear();

    return dateMonth < 10 ? `${dateDay}/0${dateMonth}/${dateYear}` : `${dateDay}/${dateMonth}/${dateYear}`;
}