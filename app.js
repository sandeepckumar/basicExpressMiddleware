require('dotenv').config()
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 5000;
const authRouter = require("./routes/auth.route.js")
const userRouter = require("./routes/user.route.js")
const serveIndex = require("serve-index")
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/user", userRouter)
app.use("/auth", authRouter)

app.use("/files", express.static(path.resolve(process.env.FILE_PATH)), serveIndex(path.resolve(process.env.FILE_PATH), { 'icons': true }))
console.log(process.env.FILE_PATH)

app.get("/download/:fileName", (req, res) => {
    if (req.params['fileName'])
    {
        res.status(200).download(path.resolve(`${process.env.FILE_PATH}/${req.params['fileName']}`))
    } else
    {
        res.status(401).send("requires param: filename")
    }
})


app.listen(port, () => { 
    console.log(`Server started on port ${port}`)
})