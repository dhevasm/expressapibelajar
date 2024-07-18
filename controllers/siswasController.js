const { default: mongoose } = require('mongoose');
const Siswa = require('../models/siswasModel');

const siswaGet = async (req, res) => {
    try{
        const siswas = await Siswa.find({});
        res.status(200).json({message: "Get all siswa", data: siswas});
    }catch(error){
        res.status(400).json({message: "Failed to get siswa", error: error});
    }
}

const siswaGetById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message: "No Such Id"});
    }

    try{
        const siswa = await Siswa.findById(req.params.id);
        res.status(200).json({message: "Get siswa by id", data: siswa});
    }catch(error){
        res.status(400).json({message: "Failed to get siswa by id", error: error});
    }
}

const siswaCreate = async (req, res) => {
    const {name, age, address} = req.body;

    try{
        const siswa = await Siswa.create({
            name,
            age,
            address
        });
        res.status(200).json({message: "Siswa was created", data: siswa}); 
    }catch(error){
        res.status(400).json({message: "Failed to create siswa", error: error});
    }
}

const siswaUpdate = async (req, res) => {
    const {name, age, address} = req.body;

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message: "No Such Id"});
    }

    try{
        const siswa = await Siswa.findByIdAndUpdate(req.params.id, {
            name,
            age,
            address
        }, {new: true});
        res.status(200).json({message: "Siswa was updated", data: siswa});
    }catch(error){
        res.status(400).json({message: "Failed to update siswa", error: error});
    }
    
}

const siswaDelete = async (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message: "No Such Id"});
    }
    
    try{
        const id = req.params.id;
        const siswa = await Siswa.findByIdAndDelete(id);
        res.status(200).json({message: "Siswa was deleted", data: siswa});
    }catch(error){
        res.status(400).json({message: "Failed to delete siswa", erro});
    }
}

module.exports = {
    siswaGet,
    siswaGetById,
    siswaCreate,
    siswaUpdate,
    siswaDelete
}