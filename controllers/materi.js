const db = require("../models");
const Materi = db.matries

//fungsi READ/GET ALL
exports.getAll = async(req, res) => {
    try {
        const materi = await Materi.findAll()
        res.json({
            message: "Quizzes retrieved successfully.",
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}
//fungsi GET by ID
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Materi.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Quizzes retrieved successfully with id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}