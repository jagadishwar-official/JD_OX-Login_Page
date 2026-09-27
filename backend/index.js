const express = require("express")

const app = express();
const cors = require("cors")


app.use(express.json())
app.use(cors())
const users = []

const user = users.find((user) => {
    return user.email === email && user.password === password
})

app.post("/register", (req, res) => {

    const { name, email, password } = req.body

    users.push({
        name: name,
        email: email,
        password: password
    })

    res.json({
        message: "Account created successfully"
    })

})

app.post("/login", (req, res) => {

    const { email, password } = req.body

    const user = users.find((user) => {
        return user.email === email && user.password === password
    })

    if (user) {

        res.json({
            message: "Login successful"
        })

    } else {

        res.status(401).json({
            message: "Invalid email or password"
        })

    }

})


app.listen(3000, ()=>{
    console.log("Server Started....")
})
