require('chai').should()
const parseInstagramDate = require('../index')

describe('parse instagram date', () => {
  it('should parse', (done) => {
    const instagramDate = '1488845935'
    const date = parseInstagramDate(instagramDate)
    date.should.be.an('Date')
    date.getTime().should.be.eqls(1488845935000)
    date.toJSON().should.be.eqls('2017-03-07T00:18:55.000Z')
    done()
  })

  it('should throw Error when value is not a number', (done) => {
    try {
      const instagramDate = '1488s845935'
      const date = parseInstagramDate(instagramDate)
      done(date)
    } catch (error) {
      error.should.be.an('Error')
      error.message.should.be.eql('Instagram date is not a number')
      done()
    }
  })
})
