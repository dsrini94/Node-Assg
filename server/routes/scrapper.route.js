const fs = require('fs'),
      request = require('request'),
      cheerio = require('cheerio'),
      scrapper = require('express').Router();

scrapper.get('/scrape',(req,res)=>{

  try{
    url = req.query.text;

    request(url, function (error, response, body) {
      if (!error) {
        var $ = cheerio.load(body)

        var title = $('title').text();
        var content = $('body').text();
        var freeArticles = $('.central-featured-lang.lang1 a small').text()

        console.log('URL: ' + url);
        console.log('Title: ' + title);
        console.log('EN articles: ' + freeArticles);
        console.log('content: ' + content);

        res.send('check your console');
      }
      else {
        throw error
      }
    });
  }
  catch(err){
    console.log(err);
  }
})

module.exports = scrapper;
