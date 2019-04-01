module.exports = (sequelize, type) => {
  return sequelize.define('message', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: type.STRING
  })
}

// const Event = sequelize.define('event', {
//   _id: {
//     type: Sequelize.INTEGER, 
//     primaryKey: true, 
//     autoIncrement : true,
//     allowNull: false
//   },
//   text: {
//     type: Sequelize.STRING,
//   },
//   tags: {
//     type: Sequelize.STRING,
//   },
// });


// let newEvent = {
//   'text': 'yoyoyo', 
//   'tags': 'redux', 
// }
