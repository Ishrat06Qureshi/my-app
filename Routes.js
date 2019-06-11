const express = require("express")
const router= express.Router();
const StudentRegistration = require("../backend/Models/StudentModel")
const CourseRegistration = require("../backend/Models/CourseModel")


router.post("/studentRegistration", ( req , res ) => {
 
   const { name , courseName , email , number , address  } = req.body
    const data = {
        name ,
        courseName,
        email,
        number,
        address,
    }
    StudentRegistration.findOne({email:req.body.email}).
        then((user) => {
            if (user){
                
                return res.status(400).send("user with this email already exist")  
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





router.post("/Course", ( req , res ) => {
    
   const {courseName , courseDetails } = req.body
    const data = {
       courseName,
       courseDetails,     
    }

    CourseRegistration.findOne({courseName:req.body.courseName}).
        then((course) => {
            if (course){
                return res.status(400).send("course with this name already exist") 
            }
            else{
                CourseRegistration.create(data).
                then((course) => {
               res.status(200).send("successfully registered")
                    return
                
                })
            }
        })
})



router.get("/Course", ( req , res ) => {
    
    const  registeredStudents = []
    const  registrationDetails = {}
    CourseRegistration.find().then((Courses ) => {
    
    //   Courses.map(( course ) => {
    //       StudentRegistration.find({_id :{ $in:[...course.Registeredstudents]} , "name":1 }).
    //       then(( student ) => console.log( student) )
       
        //   registrationDetails[course] = [Students]
        //   registeredStudents.push(registrationDetails)

    //   })
        // return res.status(200).send( registeredStudents )



    })

})





router.post("/courseEnroll", ( req , res ) => {
    
    const {studentId , courseId } = req.body

    console.log(studentId);
    console.log(courseId);

    let  courses = []
    let  students = []

//     StudentRegistration.findById(studentId).then((std) => {

//         if(std){

//             CourseRegistration.findById(courseId).then((crs) => {

//                 if(crs){

//                     std.Registeredcourses.push(courseId);
//                     crs.Registeredstudents.push(studentId);

//                     StudentRegistration.findByIdAndUpdate(studentId,std).then( (stdReg) => {

//                         console.log("Student Registration");
//                         console.log(stdReg)
//                     } );

//                     CourseRegistration.findByIdAndUpdate(courseId,crs).then((crsReg) => {
//                         console.log("Course Registration");
//                         console.log(crsReg)   
//                     })
//                 }
//             })
//         }
//     })

// })

         StudentRegistration.findById(studentId).then(( student ) => {

              courses=[...student.Registeredcourses,courseId] 

              StudentRegistration.findByIdAndUpdate(studentId , {Registeredcourses: courses })
              .then(() => console.log("its done "))
         })


         CourseRegistration.findById(courseId).then(( course ) => {
            students=[...course.Registeredstudents,studentId]

            CourseRegistration.findByIdAndUpdate(courseId , { Registeredstudents:students }).
            then(() => res.status(200).send("done ")) 
        
         

})

})

module.exports = router