const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 5000, () => {
    console.log("live")
})


const randomRoute = require("./routes/randomRoute")
app.use("/", randomRoute)