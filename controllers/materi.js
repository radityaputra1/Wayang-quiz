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