console.log('yayaya')
const Sequelize = require('sequelize');

const sequelize = new Sequelize('grouse', 'tolgagrouse', 'ip1000', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
 .authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });

const Event = sequelize.define('event', {
  _id: {
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement : true,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
  },
  tags: {
    type: Sequelize.STRING,
  },
  // createdAt: {
  //   type: Sequelize.DATE,
  // },
});


let newEvent = {
  'text': 'hello', 
  'tags': 'react', 
  // 'created': new Date(), 
}

sequelize.sync({ logging: console.log }).then(() => {
  return Event.create(newEvent)
})


// module.exports = 