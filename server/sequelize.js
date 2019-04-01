const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const MessageModel = require('./models/message');
const TagModel = require('./models/tag');

// Tolga's login info

// const sequelize = new Sequelize('grouse', 'tolgagrouse', 'ip1000', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// Nel's login info

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'grouse',
  username: 'gmalikova',
  password: null,
  dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize);

const MessageTag = sequelize.define('message_tag', {});
const Message = MessageModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);

Message.belongsToMany(Tag, { through: MessageTag, unique: false });
Tag.belongsToMany(Message, { through: MessageTag, unique: false });
Message.belongsTo(User);

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  User,
  Message,
  Tag
};

// sequelize.sync({ logging: console.log }).then(() => {
//   return Event.create(newEvent)
// })
