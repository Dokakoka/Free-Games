let games = document.getElementById('games')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '424f240769mshd66e91d4a2f0fe3p199b67jsn370b986a5f6f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options).then((data)=>{return data.json()}).then((data)=>{
	console.log(data)

	data.forEach(item=>{
		games.innerHTML += `
			<div class="col-md-4 text-center my-2">
				<a href="${item.game_url}" target="_blanck">
					<img src="${item.thumbnail}"/>
					<p>${item.title}</p>	
				</a>

				<a href="#" class="view py-2 px-2">View More</a>
			</div>
		`
	})
})