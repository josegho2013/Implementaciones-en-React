import mongoose from "mongoose";
const Schema = mongoose.Schema

const personajesSchema = new Schema(
    {
      personaje: {type:String},       
      anime: {type:String}
    },
    {collection: 'personajes'}
)

export default mongoose.model('AnimeModels', personajesSchema)