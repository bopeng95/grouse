const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { User, Message, Tag } = require('../sequelize');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/users', (req, res) => {
  User.create(req.body).then(user => res.json(user));
});

router.get('/users', (req, res) => {
  User.findOne({ where: { name: req.body.name } }).then(users =>
    res.json(users)
  );
});

router.post('/messages', (req, res) => {
    const body = req.body;
    
    User.findByPk(body.userId)
        .then(() => Message.create(body))
        .then(message => Tag.create(body.tags))
        .then(message => Message.findOne({ where: {id: message.id}, include: [User, Tag]}))
        .then(messageWithAssociations => res.json(messageWithAssociations))
        .catch(err => console.log(err))
})

// router.get('/messages/:userId?', (req, res) => {
//     let query;
//     if(req.params.userId) {
//         query = Message.findAll({ include: [
//             { model: User, where: { id: req.params.userId } },
//             { model: Tag }
//         ]})
//     } else if (req.body.tags) {
//         query = Message.findAll({ include: [
//             { model: Tag, where: { name: req.body.tags } },
//         ]})
//     } else {
//         query = Message.findAll({ include: [Tag, User]})
//     }
//     return query.then(messages => res.json(messages))
// })

router.get('/messages', (req, res) => {
    let query;
    if (req.body.tags) {
        query = Tag.findAll({ include: [Tag, User]})
    } else {
        query = Tag.findAll()
    }
    return query.then(messages => res.json(messages))
})

router.get('/messages/:userId?', (req, res) => {
  let query;
  if (req.params.userId) {
    query = Message.findAll({
      include: [
        { model: User, where: { id: req.params.userId } },
        { model: Tag }
      ]
    });
  } else if (req.body.tags) {
    query = Message.findAll({
      include: [{ model: Tag, where: { name: req.body.tags } }]
    });
  } else {
    query = Message.findAll({ include: [Tag, User] });
  }
  return query.then(messages => res.json(messages));
});

module.exports = router;

// GET USER
// {
//     "name": "tolga"
// }

// POST USER
// {
//     "name": "tolga"
// }

// POST MESSAGE
// {
//     "name": "bo peng",
//     "text": "i hate blah ",
//     "tags": {"name": "redux"},
//     "userId": 4
// }

// GET ALL MESSAGES
// no need for req.body

// GET MESSAGE WITH SPECIFIC TAG
//{
    // "tags": ["react"]
//}
