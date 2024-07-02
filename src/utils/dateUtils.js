export function getFormattedDate(rawDate) {
  console.log(rawDate);
  let date = new Date(rawDate);
  console.log(date);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}