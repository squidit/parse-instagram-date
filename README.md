# parse-instagram-date
Parse Instagram timestamp to Date object

### Install
`npm install --save parse-instagram-date`

### Usage

```js
const parseInstagramDate = require('parse-instagram-date')

const created_time = '1488845935'
const date = parseInstagramDate(created_time) // -> Mon Mar 06 2017 21:18:55 GMT-0300 (BRT)
date.getTime() // -> 1488845935000
date.toJSON() // -> 2017-03-07T00:18:55.000Z
```

### Contributing

PRs are always welcome 🙏