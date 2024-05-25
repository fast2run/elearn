const mongoose=require('mongoose');
const learnerRegisterSchema = require('../modules/learnerRegister')
const trainerRegisterSchema = require('../modules/trainerRegister')
const adminRegisterSchema = require('../modules/adminRegister');
const courseSchema = require('../modules/course');
//const bcrypt = require("bcryptjs");
//require('dotenv').config();
const asyncHandler = require("express-async-handler");
const { json } = require('express');
const adminRegister = require('../modules/adminRegister');

//Learner controler
const createRegister = asyncHandler(async(req,res)=>{
    // res.json({
    //     purpose:"Store Project",
    //     method:req.method
    // });

    const {
        learnerFirstName,
        learnerLastName,
        learnerAge,
        learnerMobile,
        learnerEmail,
        learnerPassword}= await req.body;

        try{
            const register = await learnerRegisterSchema.create({
                learnerFirstName,
                learnerLastName,
                learnerAge,
                learnerMobile,
                learnerEmail,
                learnerPassword
            });
            res.status(200).json(register);
            console.log(register);

        }catch(err){
            res.status(400).json({
                error:err.message,
            });
        }

       
});


const getRegisters = asyncHandler(async(req,res)=>{
    // res.json({
    //     purpose:"Show All register details data",
    //     method:req.method
    // });

    const register = await learnerRegisterSchema.find({});
    res.status(200).json(register);
    console.log(register);
})
const getRegister = asyncHandler(async(req,res)=>{
    // res.json({
    //     purpose:"specific data",
    //     method:req.method
    // })

    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            error:"Project Details not found",
        });
    }
    const register = await learnerRegisterSchema.findById(id);
    res.status(200).json(register);
    console.log(register);
})
// const updateRegister =  asyncHandler(async(req,res)=>{
//     // res.json({
//     //     purpose:"Update Specific register details data",
//     //     method:req.method
//     // });
//     const {id}=req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         res.status(400).json({
//             error:"Project not found",
//         })
//     }
//     const register = await learnerRegisterSchema.findOneAndUpdate({learnerEmail},
//         {...req.body}) ;
//         res.status(200).json(register);
//         console.log(register);
// });
const updateRegister =  asyncHandler(async(req,res)=>{
    const {learnerFirstName,
            learnerLastName,
            learnerAge,
            learnerEmail,
            learnerMobile,
            learnerPassword} = await req.body;

            try {
                const register = await learnerRegisterSchema.findOneAndUpdate(
                    {learnerEmail},{learnerFirstName,
                        learnerLastName,
                        learnerAge,
                        
                        learnerMobile,
                        learnerPassword},{new:true});
                        if(!register){
                            return res.status(404).json({message:'user not found'});  
                        }
                        res.json(register);
                
            } catch (error) {
                res.status(400).send(error);
            }
})


// const deleteRegister =  asyncHandler(async(req,res)=>{
    // res.json({
    //     purpose:"Delete Specific register details data",
    //     method:req.method
    // });

//     const {learnerEmail}=await req.body;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//     res.status(400).json({
//         error:"Learner Details not Fount",
//         })
//     }
//     const register = await learnerRegisterSchema.findOneAndDelete({learnerEmail});
//     res.status(200).json(register);
//     console.log(register);
// });
const deleteRegister =  asyncHandler(async(req,res)=>{
    try {
        const learnerEmail = await req.body.learnerEmail;
        const register = await learnerRegisterSchema.findOneAndDelete({learnerEmail});
        if(register){
            res.status(200).send({
                message:'Item deleted Successfully', item:register
            })
        }else{
            res.status(404).send({message:'Item not fond'});
        }
    } catch (error) {
        res.status(500).send({message:"error deleting item",error});
    }
});


const loginRegister = asyncHandler(async (req,res)=>{
    const {learnerEmail,learnerPassword}=req.body;
    // if(!mongoose.Types.ObjectId.isValid(email)){
    //     res.status(400).json({
    //         error:"This is user not found",
    //     })
    // }
    const loginLearner = await learnerRegisterSchema.findOne({learnerEmail});
    if(!loginLearner){
        return res.status(400).send('Invalid Learner');
    }
    if(loginLearner.learnerPassword != learnerPassword){
        return res.status(400).send('Invalid password');
    }
    res.send('login Successful')
    
    });
    


//Trainer Controller
const createTrainerRegister = asyncHandler(async(req,res)=>{
    // res.json({
    //     purpose:"show all data from trainers",
    //     method:req.method
    // })

    const {
        trainerFirstName,
        trainerLastName,
        trainerAge,
        trainerMobile,
        trainerEmail,
        trainerPassword}=req.body;
        try{
            const trainerRegister = await trainerRegisterSchema.create({
                trainerFirstName,
                trainerLastName,
                trainerAge,
                trainerMobile,
                trainerEmail,
                trainerPassword
            });
            res.status(200).json(trainerRegister);
            console.log(trainerRegister);

        }catch(err){
            res.status(400).json({
                error:err.message,
            })
        }

})
const getTrainerRegisters = asyncHandler(async(req,res)=>{
    const trainerRegister = await trainerRegisterSchema.find({});
    res.status(200).json(trainerRegister);
    console.log(trainerRegister); 

})

const getTrainerRegister = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            error:"Trainer Details not found",
        });
    }
    const trainerRegister =await trainerRegisterSchema.findById(id);
    res.status(200).json(trainerRegister);
    console.log(trainerRegister);
})

// const updateTrainerRegister = asyncHandler(async(req,res)=>{
//     const {id}=req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         res.status(400).json({
//             error:"Trianer Details not found",
//         })
//     }
//     const trainerRegister = await trainerRegisterSchema.findOneAndUpdate({learnerEmail},
//         {...req.body});
//         res.status(200).json(trainerRegister);
//         console.log((trainerRegister));
// });
const updateTrainerRegister =  asyncHandler(async(req,res)=>{
    const {trainerFirstName,
            trainerLastName,
            trainerAge,
            trainerEmail,
            trainerMobile,
            trainerPassword} = await req.body;

            try {
                const register = await trainerRegisterSchema.findOneAndUpdate(
                    {trainerEmail},{trainerFirstName,
                        trainerLastName,
                        trainerAge,                        
                        trainerMobile,
                        trainerPassword},{new:true});
                        if(!register){
                            return res.status(404).json({message:'user not found'});  
                        }
                        res.json(register);
                
            } catch (error) {
                res.status(400).send(error);
            }
})



// const deleteTrainerRegister = asyncHandler(async(req,res)=>{
//     const {id}=req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         res.status(400).json({
//             error:"Tainer data not found",
//         })
//     }
//     const trainerRegister = await trainerRegisterSchema.findOneAndDelete({_id:id});
//     res.status(200).json(trainerRegister);
//     console.log(trainerRegister);
// })

const deleteTrainerRegister =  asyncHandler(async(req,res)=>{
    try {
        const trainerEmail = await req.body.trainerEmail;
        const register = await trainerRegisterSchema.findOneAndDelete({trainerEmail});
        if(register){
            res.status(200).send({
                message:'Item deleted Successfully', item:register
            })
        }else{
            res.status(404).send({message:'Item not fond'});
        }
    } catch (error) {
        res.status(500).send({message:"error deleting item",error});
    }
});

//Admin Control


const createAdminRegister = asyncHandler(async(req,res)=>{
    const{
        adminFirstName,
        adminLastName,
        adminAge,
        adminMobile,
        adminEmail,
        adminPassword
    }=req.body;
    try{
        const adminRegister = await adminRegisterSchema.create({
            adminFirstName,
            adminLastName,
            adminAge,
            adminMobile,
            adminEmail,
            adminPassword
        });
        res.status(200).json(adminRegister);
        console.log(adminRegister);
    }catch(error){
        res.status(400).json({
            error:error.message,
        })
    }
})

const getAdminRegsiters = asyncHandler(async(req,res)=>{
    const adminRegister = await adminRegisterSchema.find({});
    res.status(200).json(adminRegister);
    clg(adminRegister)
})

const getAdminRegsiter = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            error:"Admin register data not found",
        })
    }

    const adminRegister = await adminRegisterSchema.findById(id);
    res.status(200).json(adminRegister);
    console.log(adminRegister);
});

const updateAdminRegister = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            error:"admin register data not found",
        })
    }
    const adminRegister = await adminRegisterSchema.findOneAndUpdate({_id:id},
        {...req.body});
        res.status(200).json(adminRegister);
        console.log(adminRegister);
})
const daleteAdminRegister = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            error:'admin data not found',
        })
    }
    const adminRegister = await adminRegisterSchema.findOneAndDelete({_id:id});
    res.status(200).json(adminRegister);
    console.log(adminRegister);
})

//Course

const createCourse = asyncHandler(async(req,res)=>{
    const{
        courseName,
        courseStartDate,
        courseEndDate,
        courseFees
    }=req.body;
    try{
        const course=await courseSchema.create({
        courseName,
        courseStartDate,
        courseEndDate,
        courseFees
        });
        res.status(200).json(course);
        console.log(course);

    }catch(error){
        res.status(400).json({
            error:error.message,
        })
    }
});
const getCourses = asyncHandler(async(req,res)=>{
    const course = await courseSchema.find({});
    res.status(200).json(course);
    console.log(course);
})

const getCourse = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            error:"Course Details not Found",
        })
    }

    const course = await courseSchema.findById(id);
    res.status(200).json(course);
    console.log(course);
})
// const updateCourse = asyncHandler(async(req,res)=>{
//     const {id}=req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         res.status(400).json({
//             error:"Course details not found",
//         })
//     }
//     const course = await courseSchema.findOneAndUpdate({_id:id},
//         {...req.body});
//         res.status(200).json(course);
//         console.log(course);
// })

const updateCourse= asyncHandler(async(req,res)=>{
    const {courseName,
        courseStartDate,
        courseEndDate,
        courseFees} = await req.body;
        try {
            const update = await courseSchema.findOneAndUpdate(
                {courseName},{
                    courseStartDate,
                    courseEndDate,
                    courseFees
                },{new:true});
                if (!update){
                    return res.status(404).json({message:'Course Not found'});
                }
                res.json(update);
        } catch (error) {
            res.status(400).send(error);
        }
});


// const deleteCourse = asyncHandler(async(req,res)=>{
//     const {id}=req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         res.status(400).json({
//             error:"Course data not Found",
//         })
//     }
//     const course = await courseSchema.findOneAndDelete({_id:id});
//     res.status(200).json(course);
//     console.log(course);
// })
const deleteCourse = asyncHandler(async(req,res)=>{
    try {
        const courseName = await req.body.courseName;
        const deleteCourse = await courseSchema.findOneAndDelete({courseName})
        if(deleteCourse){
            res.status(200).send({
                message:'Item deleleted successfully', item:deleteCourse
            })
        }else{
            res.status(404).send({message:'Item not found'});
        }
    } catch (error) {
        res.status(500).send({message:"errror not deleting item",error})
    }
})

module.exports={
    createRegister,
    getRegisters,
    getRegister,
    updateRegister,
    deleteRegister,
    loginRegister,
    //trainer
    createTrainerRegister,
    getTrainerRegisters,
    getTrainerRegister,
    updateTrainerRegister,
    deleteTrainerRegister,
    //Admin
    createAdminRegister,
    getAdminRegsiters,
    getAdminRegsiter,
    updateAdminRegister,
    daleteAdminRegister,
    //Course
    createCourse,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse,
}



