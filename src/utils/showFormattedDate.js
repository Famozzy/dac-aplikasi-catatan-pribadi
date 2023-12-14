export default function showFormattedDate(date, locale = "ID") {
  const locales = {
    EN: "en-US",
    ID: "id-ID",
  }
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(date).toLocaleDateString(locales[locale], options)
}
