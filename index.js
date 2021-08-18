const express = require("express")
const cors = require("cors")
const multer = require("multer")
const { loadImage } = require('canvas')

const { estimateMultiplePosesOnImage } = require("./model")

let upload = multer({ dest: 'uploads/' })
let app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('./uploads'))

app.post('/', upload.array('file', 12), async (req, res) => {
    let image = await loadImage(`http://localhost:5000/${req.files.path}`)
    let pose = estimateMultiplePosesOnImage(image)
    console.log(pose)
    res.send("done");
});

app.listen(5000, () => {console.log("listening")})