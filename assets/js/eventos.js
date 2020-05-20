(cambio = (document) => {
	let tabs = Array.prototype.slice.apply(document.querySelectorAll('.items'));
	let panels = Array.prototype.slice.apply(document.querySelectorAll('.panel'));
	// delegacion de eventos
	// se le asigna un evento a los padres/contenedores
	document.getElementById('tabs').addEventListener('click', (e) => {
		if (e.target.classList.contains('items')) {
			//    dentro de todas las clases esta la clase de parectesis
			let i = tabs.indexOf(e.target);
			// indexOf() nos devuelve la posición, mediante un número entero, de una cadena o un carácter dentro de una cadena de texto nada.
			tabs.map((tab) => tab.classList.remove('active'));
			/* map() llama a la función callback provista una vez por elemento de un array, en orden, y construye un nuevo array con los resultados 
            por eso al principio lo convertimos en array*/
			tabs[i].classList.add('active');
			panels.map((panel) => panel.classList.remove('active'));
			panels[i].classList.add('active');
		}
	});
})(document);

let btnInfo = document.querySelectorAll('.btn-dark');

for (let i = 0; i < btnInfo.length; i += 1) {
	btnInfo[i].addEventListener('click', () => {
		btnInfo[i].innerHTML = 'listo';
		btnInfo[i].style.background = 'yellow';
		btnInfo[i].style.color = 'black';
	});
}
