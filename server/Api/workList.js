const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
var workList = require('../Model/workList');
var checkToken = require('./checkToken');

// let checkToken = async (req,res,next)=>{
//     console.log(req.headers);  
// }
var auth=checkToken.checkToken;
ROUTER.post('/add',auth, (req, res) => {
    console.log(req.headers);  
    console.log(req.body);
    const newWorkList = new workList(
        req.body
    )
    newWorkList
        .save()
        .then(workList => res.send(workList))
        .catch(err => res.send({ success: false, message: err }))
})
ROUTER.get('/',auth,(req, res) => {
    workList.find({}).then(data => {
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).send("not product")
        }
    }).catch(err => res.send({ success: false, message: err }))
})
ROUTER.delete('/',auth, (req, res) => {
    workList.deleteOne({ _id: req.body._id }).then((result) => {
        console.log(result);
        res.status(200).send(result)
    }).catch((err) => {
        res.status(200).send({ success: false, message: err });
    });
})

// ROUTER.get('/:id', (req, res) => {
//     product.find({ _id: req.params.id }).then(data => {
//         if (data) {
//             res.status(200).send(data)
//         } else {
//             res.status(404).send("not product")
//         }
//     }).catch(err => console.log(err))
// })

ROUTER.put('/',auth,(req, res) => {
    workList.findOneAndUpdate({ _id: req.body._id }, req.body).then(data => {
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).send("not product")
        }
    }).catch(res.status(200).send({ success: false, message: err }))
})

// ROUTER.delete('/', (req, res) => {
//     product.deleteOne({ _id: req.body._id }).then(data => {
//         if (data) {
//             res.status(200).send(data)
//         } else {
//             res.status(404).send("not product")
//         }
//     }).catch(err => console.log(err))
// })
module.exports = ROUTER;


