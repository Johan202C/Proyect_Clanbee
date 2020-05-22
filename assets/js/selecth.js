let abajo = document.querySelectorAll('.card');
console.log(abajo)
const changeBg = (e)=>{
    console.log(e)
    e.target.classList.toggle('abajoD')
}
for(let a of abajo){
    a.addEventListener('click', changeBg)
}
