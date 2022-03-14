const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const schema = require('./structure');
const async = require('async');
//for parsing incoming data
router.use(express.json());
//fetch and parse the body of the request and urlencoded requests make them available in the req.body of the request’s route middleware.
router.use(bodyParser.urlencoded({
    extended: false
}))
router.get('/getdata', (req, res) => {
// let skip=req.query.skip;
// let limit=req.query.limit;
    schema.find((err, data) => {
        if (err)
            throw err;
        else
            res.send(data);
    })
})
router.post('/postdata', (req, res) => {
    let data = new schema(req.body);
    data.save()
        .then((item) => {
            res.send(item);
        })
        .catch(err => res.status(400).send("data not saved"));

})
router.put('/putdata', (req, res) => {
    schema.findOneAndUpdate({ name: 'ankit' } && { age: 0 },
        { name: 'aman' } && { age: 20 },
        { overwrite: false }, (err, data) => {
            if (err)
                throw err;
            else
                res.send(data);

        })
})
router.patch('/patchdata', (req, res) => {
    console.log("patched");
    res.json({
        msg: 'data patched succesfully'
    })
})
router.delete('/deletedata', (req, res) => {
    schema.findOneAndDelete({ name: `${req.body.name}` }, (err, data) => {
        if (err)
            throw err;
        else
            res.send(`${req.body.name}: deleted sucessfully ( last occurence only)`);

    })
})
router.get('/', (req, res, next) => {
    res.status(302).send('page not available');
})
module.exports = router;