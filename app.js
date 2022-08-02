
const express = require('express');
const app = express();

// --------- News Routes    ---------
app.get('/bbc.com', (req, res) => {
    res.json({
        message: 'BBC Home'
    })
})

app.get('/bbc.com/news', (req, res) => {
    res.json({
        message: 'News'
    })
})

app.get('/bbc.com/news/world-ukraine', (req, res) => {
    res.json({
        message: 'War in ukraine'
    })
})

app.get('/bbc.com/news/coronavirus', (req, res) => {
    res.json({
        message: 'Coronavirus'
    })
})

app.get('/bbc.com/news/science-environment', (req, res) => {
    res.json({
        message: 'Climate'
    })
})
 
app.get('/bbc.com/news/av/video', (req, res) => {
    res.json({
        message: 'Video'
    })
})

app.get('/bbc.com/news/world', (req, res) => {
    res.json({
        message: 'World'
    })
})

app.get('/bbc.com/news/world/asia', (req, res) => {
    res.json({
        message: 'Asia'
    })
})


app.get('/bbc.com/news/world/uk', (req, res) => {
    res.json({
        message: 'UK' 
    })
})

app.get('/bbc.com/news/business', (req, res) => {
    res.json({
        message: 'Business'
    })
})

app.get('/bbc.com/news/technology', (req, res) => {
    res.json({
        message: 'Tech'
    })
})

app.get('/bbc.com/news/science_and_environment', (req, res) => {
    res.json({
        message: 'Science'
    })
})

app.get('/bbc.com/news/stories', (req, res) => {
    res.json({
        message: 'Stories'
    })
})

// res.get()

// --------- Sports Routes    ---------
app.get('/bbc.com/sports', (req, res) => {
    res.json({
        message: 'Sports - Home'
    })
})

app.get('/bbc.com/sports/football', (req, res) => {
    res.json({
        message: 'Football'
    })
})

app.get('/bbc.com/sports/cricket', (req, res) => {
    res.json({
        message: 'Cricket'
    })
})

app.get('/bbc.com/sports/formula1', (req, res) => {
    res.json({
        message: 'Formula 1'
    })
})

app.get('/bbc.com/sports/rugby-union', (req, res) => {
    res.json({
        message: 'Rugby U'
    })
})

app.get('/bbc.com/sports/tennis', (req, res) => {
    res.json({
        message: 'Tennis'
    })
})

app.get('/bbc.com/sports/golf', (req, res) => {
    res.json({
        message: 'Golf'
    })
})

app.get('/bbc.com/sports/atletics', (req, res) => {
    res.json({
        message: 'Athletics - Commonwealth'
    })
})

app.get('/bbc.com/sports/cycling', (req, res) => {
    res.json({
        message: 'Cycling - Not giving up'
    })
})

app.get('/bbc.com/sports/winter-sports', (req, res) => {
    res.json({
        message: 'Winter Sports - Helping others is bigger than winning a medal'
    })
})

app.get('/bbc.com/sports/commonwealth-games', (req, res) => {
    res.json({
        message: 'Commonwealth Games - BBC reporter slips into pool mid-interview'
    })
})

// --------- WorkLife Routes    ---------
app.get('/bbc.com/worklife', (req, res) => {
    res.json({
        message: 'WorkLife - US firms enforce taking time off'
    })
})

app.get('/bbc.com/worklife/article/what-is-bbc-worklife', (req, res) => {
    res.json({
        message: 'What is BBC Worklife?'
    })
})

app.get('/bbc.com/worklife/tags/how-we-work', (req, res) => {
    res.json({
        message: 'BBC - HOW WE WORK'
    })
})

app.get('/bbc.com/worklife/tags/how-we-live', (req, res) => {
    res.json({
        message: 'BBC - HOW WE LIVE'
    })
})



app.listen(3000, () => {
    console.log('BBC news is running on the port 3000');
})
















































