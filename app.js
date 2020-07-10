const express = require('express');
const app = express();

app.use(express.static("resources"))

app.get('/', (req, res)=> {
    res.send("<h1>Hi</h1>")
}) 

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running..')
})