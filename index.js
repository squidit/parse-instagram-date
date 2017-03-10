function parseInstagramDate (instagramDate) {
  if (isNaN(instagramDate)) {
    throw new Error('Instagram date is not a number')
  }
  const intDate = parseInt(instagramDate, 10) * 1000
  return new Date(intDate)
}

module.exports = parseInstagramDate
