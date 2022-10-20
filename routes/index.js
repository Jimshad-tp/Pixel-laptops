var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

let products=[
    {
      name:"HP 15s",
      os:"windows 10",
      Processor:"3rd Gen Ryzen 5 3500U | 3.7 GHz",
      rate:"₹47990",
    image:"https://m.media-amazon.com/images/I/91rbkXFZlwL._SL1500_.jpg"
    },
    {
      name:"Ideapad Slim 3i",
      os:"Windows 10",
      Processor:"10th Gen Intel Core i5 (i5-1035G1) | 1.0 GHz",
      rate:"₹51000",
      image:"https://5.imimg.com/data5/EG/BK/UO/SELLER-13241632/lenevo-laptops-500x500.jpg"
    },
    {
      name:"Ideapad S145",
      os:"Windows 10 Home",
      Processor:"7th Gen Core Intel I3-7020U | 2.3 GHz",
      rate:"₹32490",
      image:"https://images-eu.ssl-images-amazon.com/images/I/41PnIUzyYML._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name:"macBook Air 2018",
      os:"iOS 10.14 Mojave",
      Processor:"8th-generation Intel Core i5 | NA",
      rate:"₹102990",
      image:"https://s.yimg.com/uu/api/res/1.2/zjQ51iz0jv372XxRuViHsA--~B/Zmk9ZmlsbDtoPTQ1MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2018-11/d3642120-e12e-11e8-b7f6-d080f65615ce.cf.jpg"
    }]
  


    if(req.session.user){
        res.render('index', { products,user:true});
    }
    else{
        res.redirect('/login')
    }
  
  });
  module.exports = router;