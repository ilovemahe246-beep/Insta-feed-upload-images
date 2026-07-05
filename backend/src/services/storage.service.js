require("dotenv").config();
const ImageKit =require("@imagekit/nodejs")
const { model } = require("mongoose")

const imagekit = new ImageKit({
    publicKey:"public_3gNhAyesoVBQMFzqBwzamG7rY1U=",
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:"https://ik.imagekit.io/jt6m8s71q"
})

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: `image-${Date.now()}.jpg`
    });

    return result;
}

module.exports = {
    uploadFile
};