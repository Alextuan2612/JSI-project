

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c174031a52msh1ac90e18804d0cep12705ejsn2b5907b8a0b1',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Vietnam', options)
	.then(response => response.json())
	// .then(response => {console.log(response)})
	.then(response => {let numbers = response.data;
		document.getElementById("confirmed").innerHTML = numbers.confirmed
		document.getElementById("deaths").innerHTML = numbers.deaths
		document.getElementById("lastChecked").innerHTML = numbers.lastChecked
		document.getElementById("lastReported").innerHTML = numbers.lastReported
		document.getElementById("recovered").innerHTML = numbers.recovered

		console.log(numbers)
		})
	.catch(err => console.error(err));

