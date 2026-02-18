const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.json({message: "welcome to app"})
})

app.listen(PORT, () => {
    console.log(`Server is runnig http://localhost:${PORT}`);
})