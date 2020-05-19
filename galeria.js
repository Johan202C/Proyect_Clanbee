let cerrar = document.querySelectorAll('.cerrar')[0];
let abrir = document.querySelectorAll('.btnSpecial')[0];
let ventana = document.querySelectorAll('.ventana')[0];
let ventanaC = document.querySelectorAll('.contModal')[0];

abrir.addEventListener('click', (e) => {
	e.preventDefault();
	ventanaC.style.opacity = '1';
	ventanaC.style.visibility = 'visible';
	ventana.classList.toggle('ventanaClose');
});

cerrar.addEventListener('click', (e) => {
	ventana.classList.toggle('ventanaClose');
	setTimeout(function () {
		ventanaC.style.opacity = '0';
		ventanaC.style.visibility = 'hidden';
	}, 1000);
});

let abajo = document.querySelectorAll('.abajo');
let btnTarjeta = document.querySelectorAll('.btnTarjeta');

for (let j = 0; j < abajo.length; j += 1) {
	for (let i = 0; i < btnTarjeta.length; i += 1) {
		btnTarjeta[i].addEventListener('click', () => {
			btnTarjeta[i].innerHTML = 'siguiendo';
		});
		btnTarjeta[j].addEventListener('click', () => {
			abajo[j].style.background = 'rgb(141, 70, 105)';
		});
	}
}

window.onscroll = function () {
	if (
		document.documentElement.scrollTop > 546 &&
		document.documentElement.scrollTop < 820
	) {
		document.querySelector('.contIrArriba').classList.add('show');
	} else {
		document.querySelector('.contIrArriba').classList.remove('show');
	}
};

document.querySelector('.contIrArriba').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
