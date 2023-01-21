const express = require('express')
const { useState } = require('react')
const app = express()
const cors = require('cors')

app.use(cors());
let notes = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
let now = new Date()
app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for 2 people</p><p> ${now}</p>`)
}
)
app.get('/notes', (request, response) => {
    response.json(notes)
})

app.post('/notes', (request, response) => {
    // const[noes, setNoes] = useState(notes)
    // response.json(ad)
    
    const ad = {
        "name":String(request.params.a),
        "number":Number(request.params.b),
    }
    notes.push(ad)
    response.json(ad)
})

app.get('/notes/:id', (request, response) => {
    const id = request.params.id
    console.log(typeof id)
    const note = notes.find(note => note.id === Number(id))
    if(note){
        response.send(note)
        console.log(note)
    }
    else{
        response.status(404).send(`<p>Not found</p>`)
    }
})
app.delete('/notes/:id', (request, response) => {
    const[noes, setNoes] = useState(notes)
    const id = request.params.id
    console.log(typeof id)
    const note = notes.filter(note => note.id != Number(id))
    if(note){
        response.send(note)
        console.log(note)
    }
    else{
        response.status(404).send(`<p>Not found</p>`)
    }
    setNoes(note)
})
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// const PORT = 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })
// app.use(cors)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})