const express = require("express")

const app = express();
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {

    const { name, email, password } = req.body

    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Password:", password)

    res.json({
        message: "Account created successfully"
    })

})

app.post("/login", (req, res) => {

    const { email, password } = req.body

    if (email === "john@gmail.com" && password === "1234") {

        res.json({
            message: "Login successful"
        })

    } else {

        res.status(401).json({
            message : "Invalid email or password"
        })

    }

})


app.listen(3000, ()=>{
    console.log("Server Started....")
})
