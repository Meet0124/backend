import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) { // cb is callback
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    //To do
    //const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalName);
  },
});

export const upload= multer({
    storage
})
// once user give us the file  we save on our server now we want to upload on c;oudinary
// for that we use cloudinary in utils