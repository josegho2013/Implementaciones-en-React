//importamos el Modelo
import AnimeModels from "../models/AnimeModels";

//** Métodos para el CRUD **/

//Mostrar todos los personajes
export const getAllPersonajes = async (req, res) => {
    try {
        const personajes = await AnimeModels.find()
        res.status(200).json(personajes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un blog
export const getPersonaje = async (req, res) => {
        try {
            const id = req.params.id
            await AnimeModels .findById( {_id:id} ).then( (blog) => {
                res.status(200).json(blog)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un blog
export const createPersonaje = async (req, res) => {
    try {
       await AnimeModels .create(req.body)
       res.status(200).json({
           "message":"¡personaje creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un blog
export const updatePersonaje = async (req, res) => {
    try {
        const id = req.params.id
        await AnimeModels .updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡personaje actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un blog
export const deletePersonaje = async (req, res) => {
    try {
        const id = req.params.id
        await AnimeModels .deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡personaje  eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}