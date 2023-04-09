module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        subject: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.TEXT,
        },
        isi: {
            type: Sequelize.TEXT,
        },
        isi2: {
            type: Sequelize.TEXT,
        },
        isi3: {
            type: Sequelize.TEXT,
        },
        isi4: {
            type: Sequelize.TEXT,
        },
        isi5: {
            type: Sequelize.TEXT,
        },
        isi6: {
            type: Sequelize.TEXT,
        },
    });
    return Materi;
}