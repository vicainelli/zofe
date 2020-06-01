/**
 * parseTime(str)
 * @param str A timecode
 * @returns the time in seconds
 */
const parseTime = str => {
  const plain = /^\d+(\.\d+)?$/g
  const npt = /^(?:npt:)?(?:(?:(\d+):)?(\d\d?):)?(\d\d?)(\.\d+)?$/
  const quirks = /^(?:(\d\d?)[hH])?(?:(\d\d?)[mM])?(\d\d?)[sS]$/
  let match

  if (plain.test(str)) {
    return parseFloat(str)
  }
  match = npt.exec(str) || quirks.exec(str)

  if (match) {
    return (
      3600 * (parseInt(match[1], 10) || 0) +
      60 * (parseInt(match[2], 10) || 0) +
      parseInt(match[3], 10) +
      (parseFloat(match[4]) || 0)
    )
  }
  return 0
}

export default parseTime
