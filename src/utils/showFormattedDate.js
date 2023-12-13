export default function showFormattedDate(date, locale = "id-ID") {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(date).toLocaleDateString(locale, options)
}
