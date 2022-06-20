export const shortDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('pt-br')
}
