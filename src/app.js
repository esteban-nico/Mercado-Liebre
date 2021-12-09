const express = require ('express')
const app = express ()
const path = require ('path')

app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'), () => {console.log("SERVIDOR CORRIENDO http://localhost:"+app.get('port'))})
app.use(express.static(path.resolve(__dirname,'../public')))

app.get ('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'views','home.html'))
})


app.get ('/register.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'views','register.html'))
})

app.get ('/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'views','login.html'))
})