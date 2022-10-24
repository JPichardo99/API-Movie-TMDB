const btnTopRated = document.getElementById('btnTopRated');
const btnUpcoming = document.getElementById('btnUpcoming');
const btnPopular = document.getElementById('btnPopular');

// Categorias
btnTopRated.addEventListener('click', () => {
	PeliculasTopRated();
});
btnUpcoming.addEventListener('click', () => {
	PeliculasUpcoming();
});
btnPopular.addEventListener('click', () => {
	PeliculasPopulares();
});

// Peticiones
const PeliculasPopulares = async() => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0cb894064f40656f3575e8ccae3d8d73&language=es-MX`);
		console.log(response);
		if(response.status === 200){
			const datos = await response.json();
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;
		} 
	} catch(error){
		console.log(error);
	}
};
const PeliculasTopRated = async() => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0cb894064f40656f3575e8ccae3d8d73&language=es-MX`);
		console.log(response);
		if(response.status === 200){
			const datos = await response.json();
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;
		} 
	} catch(error){
		console.log(error);
	}
};
const PeliculasUpcoming = async() => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=0cb894064f40656f3575e8ccae3d8d73&language=es-MX`);
		console.log(response);
		if(response.status === 200){
			const datos = await response.json();
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;
		} 
	} catch(error){
		console.log(error);
	}
};
PeliculasPopulares();