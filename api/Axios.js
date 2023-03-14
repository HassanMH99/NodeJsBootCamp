const axios = require('axios')
const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'fc44765e47msh1246277edb76b84p18344fjsnd504c6efce67',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    const data = JSON.stringify(response.data)
	console.log(data);
}).catch(function (error) {
	console.error(error);
});