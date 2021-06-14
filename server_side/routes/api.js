const express=require('express')
const router=express.Router()
const userController=require('../controler/user')

router.post('/saveUser',userController.saveUser)
router.get('/getUser',userController.getUser)
router.get('/getAllUsers',userController.getAllUsers)
module.exports=router