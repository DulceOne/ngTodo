const Card = require('../models/card');

exports.create = (req, res) => {

    function setCards() {
        console.log("set")
        const card = {
            author: "5db61be0f24ece2ee8045068",
            date: "2019-10-29",
        }

        for (let i = 1; i < 100; i++) {
            console.log(i)
            card.body = i;
            Card(card).save()
        }
    }

    setCards()
    const card = req.body.card;
    card.author = req.user.user_id;
    Card(card).save().then(result => {
        res.send({message: "Card is added"}).status(200);
    }).catch( err => {
        res.send({message: "Server error"}).status(500);
    })


}

exports.getAll = async (req, res) => {
    let number = req.body.page < 2 ? 0  : req.body.page * 10 - 10;
    const count = await Card.find({author: req.user.user_id}).count();

    Card.find({author: req.user.user_id}).skip(number).limit(10).then(result => {
        res.send({result, count}).status(200);
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
