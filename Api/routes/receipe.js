import express from 'express'
import { add,getAllReceipe, getReceipeById, getReceipeByUserId, getSavedReceipe, savedReceipebyId } from '../controllers/Receipe.js';

import { Authenticate } from '../middlewares/auth.js';
const router = express.Router();

//create receipe
router.post('/add',add)

//Get all receipe
router.get('/',getAllReceipe)

//get all saved receipe
router.get('/saved',getSavedReceipe)

//Get receipe by id
router.get('/:id',getReceipeById)

//get receipe by userid
router.get('/user/:id',getReceipeByUserId)

//SavedReceipe by id
router.post('/id',Authenticate,savedReceipebyId)



export default router;
