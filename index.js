const express = require('express')
const app = express()
const PORT = 3000

const { getAllArticles } = require('./controllers/article.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize.authenticate().then(() => {
    console.log('COnnected to db')
}).catch(err => {
    console.error(err)
})


app.get('/', getAllArticles)

app.listen(PORT, () => {
    console.log(`Server is runnig http://localhost:${PORT}`);
})