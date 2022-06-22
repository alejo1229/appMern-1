import blogModel from "../models/BlogModel.js";

// Metodos para el CRUD

// Mostrar todos los blogs
export const getAllBlogs = async(req,res)=>{
    try {
        const blogs = await blogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Mostrar un blog
export const getBlog = async(req,res)=>{
    try {
        const blog = await blogModel.findAll({
            where: {id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Crear un blog
export const createBlog = async(req,res)=>{
    try {
        await blogModel.create(req.body)
        res.json({
            "message":"Blog creado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
// Actualizar blog
export const updateBlog = async(req,res)=>{
    try {
       await blogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Blog actualizado"
        })

    } catch (error) {
        res.json({ message: error.message })
    }
}
// Eliminar blog
export const deleteBlog = async(req,res)=>{
    try {
        await blogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Blog eliminado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}