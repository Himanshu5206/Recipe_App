import { Receipe } from "../Models/Receipe.js";
import {savedReceipe} from '../Models/SavedReceipe.js'

export const add = async (req,res) =>{
    const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl} = req.body;

    try {
        const receipe = await Receipe.create({
            title,
            ist,
            ing1,
            ing2,
            ing3,
            ing4,   
            qty1,
            qty2, 
            qty3,
            qty4,
            imgurl,
            user:req.user,
        });

            res.json({message:"Receipe created successfully..!",receipe})

    } catch (error) {
        res.json({message:error})
    }
}

export const getAllReceipe = async(req,res) =>{
    const receipe = await Receipe.find();
    res.json({receipe})
}

export const getReceipeById = async(req,res)=>{
    const id = req.params.id;

    try {
        let receipe = await Receipe.findById(id)

        if(!receipe) res.json({message:"receipe not exist"})

        res.json({message:"receipe by id",receipe})    
    } catch (error) {
        res.json({message:error})
    }
}

export const getReceipeByUserId = async (req,res) =>{
    const userId = req.params.id;

    try {
        let receipe = await Receipe.find({user:userId});

        if(!receipe) res.json({message:"receipe not exist"})

        res.json({message:"receipe by id",receipe})    
    } catch (error) {
        res.json({message:error});
    }
}

export const savedReceipebyId = async(req,res) =>{
    const id = req.params.id

    let receipe = await savedReceipe.findOne({receipe:id})

    if(receipe) return res.json({message:"receipe already saved"})

     receipe = await savedReceipe.create({receipe:id})
     
     res.json({message:"Receipe saved successfully..!",savedReceipe})
}

export const getSavedReceipe = async (req,res) =>{
    const receipe = await savedReceipe.find()

    res.json({receipe})
}