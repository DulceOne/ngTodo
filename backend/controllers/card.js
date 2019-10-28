const Card = require('../models/card');

exports.create = (req, res) => {
    const card = req.body.card;
    card.author = req.user.user_id;
    Card(card).save().then(result => {
        res.send({message: "Card is added"}).status(200);
    }).catch( err => {
        res.send({message: "Server error"}).status(500);
    })
}

exports.getAll = (req, res) => {
    Card.find({author: req.user.user_id}).then(result => {
        res.send(result).status(200);
    }).catch(err => {
        res.send({message: "Server error"}).status(500);
    })
}

exports.delete = (req, res) => {
    Card.remove({_id: req.body.id}).then(result => {
        res.send({message: "Card is deleted"}).status(200);
    }).catch(err => {
        res.send({message: "Server error"}).status(500);
    })
}