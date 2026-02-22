const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')
sequelize.authenticate().then(() => {
    console.log('COnnected to db')
}).catch(err => {
    console.error(err)
})

const articleRouter = require('./routes/article');
app.use('/', articleRouter);

const authorRouter = require('./routes/author')
app.use('/author', authorRouter)

app.listen(PORT, () => {
    console.log(`Server is runnig http://localhost:${PORT}`);
})