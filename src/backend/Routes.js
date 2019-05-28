const express = require("express")
const router= express.Router();
const StudentRegistration = require("../backend/Models/StudentModel")


router.post("/studentRegistration", ( req , res ) => {
    console.log( req.body)
   const { name , courseName , email , number , address  } = req.body
    const data = {
        name ,
        courseName,
        email,
        number,
        address,
    }

    StudentRegistration .findOne({email:req.body.email}).
        then((user) => {
            if (user){
                console.log("email error")
                return res.sendStatus(400)
                 
            }
            else{
                StudentRegistration.create(data).
                then((user) => {
               res.status(200).send("successfully registered")
                    return
                
                })
            }
        })
        
        
     
})
router.get("/studentRegistration",( req,res) => {
    
    StudentRegistration.find({}).then(( data )=>{
        if(data){
            res.status(200).send(data)
         }
         else{
             res.status(404).send(json({Error:"no data found"}))
         }
    })
    
})   






module.exports = router