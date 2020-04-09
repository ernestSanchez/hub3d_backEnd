const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const fs = require('fs');

exports.uploadArchives = (req, res) => {
    const storeConfig = multer.diskStorage({
        destination: './uploads'
    });

    const upload = multer({ "storage": storeConfig }).single('image');
       
    upload(req, res, (error) => {
        if (error) throw error;
        cloudinary.config({
            "cloud_name": "dc1jvchzq",
            "api_key": "286464852835855",
            "api_secret": "Dy2WryXnZ6MjOnJ_atx1Dt7QsMk"
        })
        const filePath = req.file.path;
       
        const fileRandome = Date.now();

        cloudinary.uploader.upload(
            filePath,
            { public_id: `hub3dArchives/${fileRandome}`},
            (error, imagen) => {
                if (error) throw error;
                
                fs.unlinkSync(filePath);
                res.send(imagen)
            }
        )
    })
}