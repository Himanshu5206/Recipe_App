import mongoose from "mongoose";

const savedReceipeSchema = new mongoose.Schema({
    Receipe:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'receipe',
    }
})

export const savedReceipe = mongoose.model('savedReceipe',savedReceipeSchema)