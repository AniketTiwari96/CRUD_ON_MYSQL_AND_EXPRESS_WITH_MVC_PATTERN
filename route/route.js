const express = require('express');
const router = express.Router();

const userController = require ('../controller/controller');


router.post('/createdata',userController.createuser)
router.get('/readData/:id',userController.readuser)
router.get('/readAllData',userController.readAllData)
router.put('/updateData/:id',userController.updateuser)
router.delete('/deleteData/:id',userController.deleteData)
module.exports=router;