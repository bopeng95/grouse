const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const { User, Message, Tag } = require('../sequelize')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.post('/users', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
})

router.get('/users', (req, res) => {
    User.findOne({where: {name: req.body.name}})
        .then(users => res.json(users))
})

router.post('/messages', (req, res) => {
    console.log(req.body.userId)
    const body = req.body
    // either find a tag with name or create a new one
    // const tags = body.tags.map(tag => Tag.findOrCreate({ where: { name: tag.name }, defaults: { name: tag.name }})
    // 
                                        //  .spread((tag, created) => tag))
    // User.findById(body.userId)
    //     .then(() => Message.create(body))
    //     // .then(message => Promise.all(tags).then(storedTags => message.addTags(storedTags)).then(() => blog))
    //     // .then(message => Message.findOne({ where: {id: message.id}, include: [User, Tag]}))
    //     // .then(messageWithAssociations => res.json(messageWithAssociations))
    //     .catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.`}))
    
    User.findByPk(body.userId)
        .then(() => Message.create(body))
        .then(message => res.json(message))
        .catch(err => console.log(err))
})

router.get('/messages/:userId?', (req, res) => {
    let query;
    if(req.params.userId) {
        query = Message.findAll({ include: [
            { model: User, where: { id: req.params.userId } },
            { model: Tag }
        ]})
    } else {
        query = Message.findAll({ include: [Tag, User]})
    }
    return query.then(messages => res.json(blogs))
})


module.exports = router;


// const eventController = require('../controllers/eventControllers.js')
// router.get('/', eventController.find)