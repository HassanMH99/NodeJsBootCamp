// Requst 
const request = require('request');
const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': 'fc44765e47msh1246277edb76b84p18344fjsnd504c6efce67',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

request(options, function (error, response, body) {
    if (error) {
        console.error(error);
    } else {
        const data = JSON.stringify(body);
        console.log(data);
    }
});
