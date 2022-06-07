const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let publicDomainPlays = {
    'Frankenstein': {
        'playwright': 'Henry M. Milner',
        'characters': 10,
        'genre': 'Romance, Drama',
        'acts': 2
    },
    'Pandoras Box':{
        'playwright': 'Frank Wedekind',
        'characters': 19,
        'genre': 'Tragedy',
        'acts': 3
    },
    'The Post Office':{
        'playwright': 'Rabindranath Tagor',
        'characters': 10,
        'genre': 'Drama',
        'acts': 2
    },
    'unknown':{
        'playwright': 'unknown',
        'characters': 'unknown',
        'genre': 'unknown',
        'acts': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})