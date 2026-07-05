const express = require("express");
const multer = require("multer");
const { uploadFile } = require("./services/storage.service");
const cors =require("cors")
const postModel =require("./models/post.models")
const app = express();

app.use(express.json());
app.use(cors())
const upload = multer({
    storage: multer.memoryStorage()
});

app.post("/create-post", upload.single("image"), async (req, res) => {   
       
        const result = await uploadFile(req.file.buffer);

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        res.status(201).json({
            message: "Post created successfully",
            post
        });

    
});
app.get("/create-post", async (req, res) => {   
    const posts = await postModel.find()

    res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
       
        
    
});


module.exports = app;