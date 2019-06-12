const express = require("express")
const router = express.Router();
const StudentRegistration = require("../backend/Models/StudentModel");
const CourseRegistration = require("../backend/Models/CourseModel");




router.post("/studentRegistration", (req, res) => {

    // const { name,  email, number, address } = req.body
    // const data = {
    //     name,
    //     email,
    //     number,
    //     address,
    // }
    // StudentRegistration.findOne({ email: req.body.email }).
    //     then((user) => {
    //         if (user) {

    //             return res.status(400).send("user with this email already exist")
    //         }
    //         else {
    //             StudentRegistration.create(data).
    //                 then((user) => {
    //                     res.status(200).send("successfully registered")
    //                     return

    //                 })
    //         }
    //     })


    console.log("hello world ")


})


router.get("/studentRegistration", (req, res) => {

    StudentRegistration.find({}).then((data) => {
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.status(404).send(json({ Error: "no data found" }))
        }
    })

})





router.post("/Course", (req, res) => {

    const { courseName, courseDetails } = req.body
    const data = {
        courseName,
        courseDetails,
    }

    CourseRegistration.findOne({ courseName: req.body.courseName }).
        then((course) => {
            if (course) {
                return res.status(400).send("course with this name already exist")
            }
            else {
                CourseRegistration.create(data).
                    then((course) => {
                        res.status(200).send("successfully registered")
                        return

                    })
            }
        })
})

router.get("/Course", (req, res) => {

    CourseRegistration.find({}).select('courseName Registeredstudents').
    populate("Registeredstudents", "name").
    then( (courses) => {
        return res.status(200).json(courses)
    });
    
});
router.post("/courseEnroll", (req, res) => {

    const { studentId, courseId } = req.body



    let courses = []
    let students = []

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

    StudentRegistration.findById(studentId).then((student) => {

        const { Registeredcourses } = student

        courses = [...student.Registeredcourses, courseId]
        if (Registeredcourses.includes(courseId)) {
            return res.status(400).send("already register in this course")
        }
        StudentRegistration.findByIdAndUpdate(studentId, { Registeredcourses: courses })
            .then(() => {


                CourseRegistration.findById(courseId).then((course) => {

                    students = [...course.Registeredstudents, studentId]

                    CourseRegistration.findByIdAndUpdate(courseId, { Registeredstudents: students }).
                        then(() => {
                            return res.status(200).send("suceessfully register")

                        })
                })
            })
    })




})

module.exports = router