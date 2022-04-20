const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index.ejs')
})


module.exports = router

router.post('/', (req, res)=>{
    const data = req.body
    const getLyrics = require("../../akzat/lib/getLyrics")
    const getSong = require("../../akzat/lib/getSong")
const options = {
    apiKey: 'yE0bQNV47CnlB6fL6PhvgKouVCVIw6bf29qWYtF3oKsD-T4D1Eo-tn0sQYNhLpkR',
    title: data.title,
    artist: data.author,
    optimizeQuery:true
}
getLyrics(options).then((lyrics)=>console.log(lyrics))
    res.render('lyrics.ejs', {data : req.body})
    
    
    

    
})
