const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/faves/animals', (req, res) => {
    const animals = ['peacock', 'flamingo', 'cats', 'unicorn']
    res.render('favAnimals', { animals })
})

app.get('/faves/foods', (req, res) => {
    const foods = ['pizza', 'spaghetti', 'bananas foster', 'green tea ice cream']
    res.render('favFoods', { foods })
})

app.get('/dislikes/animals', (req, res) => {
    const animals = ['spiders', 'snakes', 'poison dart frogs', 'crocodiles']
    res.render('dislikesAnimals', { animals })
})

app.get('/dislikes/foods', (req, res) => {
    const foods = ['olives', 'mushrooms', 'caviar', 'corned beef cabbage']
    res.render('dislikesFoods', { foods })
})

app.listen(8000, () => {
    console.log('Server started!')
})