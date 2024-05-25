const express = require('express');
const router=express.Router();

const{
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

    //adimin
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
}=require('../controllers/controller');


//learner
router.post('/learner/register', createRegister);
router.get('/learner/', getRegisters);
router.get('/learner/:id',getRegister);
router.put('/learner/update',updateRegister);
router.delete('/learner/delete',deleteRegister);
router.post('/learner/login',loginRegister);


//Trainer
router.post('/trainer/register',createTrainerRegister);
router.get('/trainer/',getTrainerRegisters);
router.get('/trainer/:id',getTrainerRegister);
router.put('/trainer/update',updateTrainerRegister);
router.delete('/trainer/delete',deleteTrainerRegister);

//admin
router.post('/admin/',createAdminRegister);
router.get('/admin/',getAdminRegsiters);
router.get('/admin/:id',getAdminRegsiter);
router.put('/admin/update',updateAdminRegister);
router.delete('/admin/:id',daleteAdminRegister);

//Course
router.post('/course/register',createCourse);
router.get('/course/',getCourses);
router.get('/course/:id',getCourse);
router.put('/course/update',updateCourse);
router.delete('/course/delete',deleteCourse);



module.exports=router;