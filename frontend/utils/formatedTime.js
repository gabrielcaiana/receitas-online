export const formatedTime = (time) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60
  const total = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2)
  return total
}
