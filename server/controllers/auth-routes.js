const ServiceSeeker = require("../models/ServiceSeeker.js");
const ServiceProvider = require("../models/ServiceProvider.js");
const bcrypt = require("bcrypt");

module.exports={
    SSSignUp: (req,res)=>{
        console.log(req.body.formData)
        var data=req.body.formData
        
        ServiceSeeker.findOne({userName : data.userName })
        .then((user)=>{
            if(user){
                res.send ('Username already exists')
            }
          else{
            ServiceSeeker.findOne({email : data.email })
            .then((user)=>{
                if(user){
                    res.send ('email address already exists')
                }
              else{
                  ServiceProvider.findOne({email : data.email })
                  .then((user)=>{
                      if(user){
                          res.send ('email address already exists')
                      }
                      else {
                          
                        const passwordHash = bcrypt.hashSync('data.password', 10);
                        var obj ={
                            firstName : data.firstName,
                            lastName : data.lastName ,
                            userName : data.userName ,
                            email : data.email ,
                            password : passwordHash ,
                            adress : '',
                            city : '',
                            phoneNumber : data.phoneNumber,
                            gender : '',
                            dateOfBirth : '',
                            picture : ''
                        }
                        ServiceSeeker.create(obj)
                        .then((user)=> res.send(user))
                        .catch((err)=> console.log(err))
                      }
                  })
              }
            })
            .catch((err)=> console.log(err))
          }})
          .catch((err)=> console.log(err))
       },
       
    EPSignUp: (req,res)=>{
        console.log(req.body.formData)
        var data=req.body.formData
        
            ServiceSeeker.findOne({email : data.email })
            .then((user)=>{
                if(user){
                    res.send ('email address already exists')
                }
              else{
                  ServiceProvider.findOne({email : data.email })
                  .then((user)=>{
                      if(user){
                          res.send ('email address already exists')
                      }
                      else {
                          
                        const passwordHash = bcrypt.hashSync('data.password', 10);
                        var obj ={
                            firstName : data.firstName,
                            lastName : data.lastName ,
                            email : data.email ,
                            password : passwordHash ,
                            adress : '',
                            city : '',
                            phoneNumber : data.phoneNumber,
                            gender : '',
                            dateOfBirth : '',
                            picture : ''
                        }
                        ServiceProvider.create(obj)
                        .then((user)=> res.send(user))
                        .catch((err)=> console.log(err))
                      }
                  })
              }
            })
            .catch((err)=> console.log(err))
          }
}