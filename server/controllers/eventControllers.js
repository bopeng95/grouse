const db = require('./db.js')

let queryString = 'SELECT * FROM events';
let insertString = 'INSERT INTO events'

const find = (req, res) => {
  db.query(queryString, (err, db) => {
    if (err) {
      console.log('theres an error')
    } else {
      res.send(db.rows);
    }
  })
}

// const insert = (req, res) => {
//   db.query(queryString, (err, db) => {
//     if (err) {
//       console.log('theres an error')
//     } else {
//       res.send(db.rows);
//     }
//   })
// }


module.exports = { find };