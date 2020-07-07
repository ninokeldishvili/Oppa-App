const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = 4000;

let MobileOperator = require('./models/mobile-operators-model');
let Utility = require('./models/utility-model');
let Finance = require('./models/finances-model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/oppa',{useNewUrlParser:true})
const connection = mongoose.connection;

connection.once('open',function(){
    console.log('Mongo DB database connection estabilished successfully')
})

routes.route('/fill-mobile').post(function(req,res){
    let mobileperator = new MobileOperator(req.body);
    mobileperator.save()
                  .then(mobileperator=>res.status(200).json({'mobileperator':'WOW! you are lucky! Filled successfully'}))
                  .catch(err=>{
                      res.status(400).send('failed, this is Oppa, Remember?');
                  })
});

routes.route('/pay-utility').post(function(req,res){
    let utility = new Utility(req.body);
    utility.save()
            .then(utility => res.status(200).json({'utility':'success'}))
            .catch(err => {
                res.status(400).send('failed');
            })
});

routes.route('/pay-finances').post(function(req,res){
    let finance = new Finance(req.body);
    finance.save()
            then(finance => res.status(200).json({'finance':'success'}))
            .catch(err => {
                res.status(400).send('failed');
            })
})

app.use('/', routes)
app.listen(PORT,function(){
    console.log("Server is running on Port: " + PORT)
})
