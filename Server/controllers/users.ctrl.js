var express = require('express');
var procedures = require('../procedures/users.proc');

var router = express.Router();


router.route('/')
    .get(function(req, res) {
        procedures.all()
        .then(function(users) {
            res.send(users);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });


router.route('/:id')
.get(function(req,res){
    procedures.read(req.params.id)
    .then(function(user){
        res.send(user);
    }, function(err){
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;