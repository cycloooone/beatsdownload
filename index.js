const express = require('express')
const ejs = require('ejs')
const app = express()

const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const registerRoutes = require('./routes/register')
const supRoutes = require('./routes/support')
const downRoutes = require('./routes/downloads')


app.set('views', 'htmls')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// routes
app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/register', registerRoutes)
app.use('/support', supRoutes)
app.use('/downloads', downRoutes)


 app.listen(3000, ()=>{
     console.log('system is running')
 })



