const express = require('express'); 
const app = express(); 
const port = 5000; 

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html"); 
})

app.use((req, res, next) => {
    res.status(404).send('Page not found'); 
})

app.listen(port, () => {
    console.log(`Server it's running on port ${port}`); 
})
