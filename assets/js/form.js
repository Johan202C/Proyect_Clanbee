let errorMensaje = '';
const output = document.querySelector('#output');
function validarVacio(input, nombre){
    if(input.value === '')
    errorMensaje = `${errorMensaje} debes completar el campo ${nombre}<br>`
    output.style.color = 'red'
}



const validarForm = (event)=>{
    errorMensaje='';
    event.preventDefault();


    const inputName = document.querySelector('#inputName');
    validarVacio(inputName, 'nombre')
    console.log(inputName)

    const inputApellido = document.querySelector('#inputApellido');
    validarVacio(inputApellido, 'apellido')

    const inputApodo = document.querySelector('#inputApodo');
    validarVacio(inputApodo, 'apodo');

    const inputCorreo = document.querySelector('#inputCorreo');
    validarVacio(inputCorreo, 'correo');

    const inputPass = document.querySelector('#inputPass');
    validarVacio(inputPass, 'contraseña');


    const inputTyC = document.querySelector('#TyC');
    if(inputTyC.checked === false){
        errorMensaje += 'Acepta los terminos y condiciones'
    }
    const newDiv = document.createElement('div')
    newDiv.innerHTML=errorMensaje;
    output.append(newDiv)
    setTimeout(()=>{
        newDiv.remove();
    }, 5000)
    if(errorMensaje===''){
        window.location = 'login.html'
    }
    guardarStorage();
}

const guardarStorage = ()=>{
    const name = document.querySelector('#inputApodo').value;
    const pass = document.querySelector('#inputPass').value;
    localStorage.setItem('user', name);
    localStorage.setItem('pass', pass)
}


const nameSaved = localStorage.getItem('user')

const logearse = (e)=>{
    e.preventDefault()

    const passSaved = localStorage.getItem('pass')

    const nameLog = document.querySelector('#nameLog').value;
    const passLog = document.querySelector('#passLog').value;

    if(nameLog === nameSaved && passLog === passSaved){
        window.location = 'home.html';
    }else{
        alert('usuario o contraseña incorrecta')
    }
}

document.querySelector('#nameUser').innerHTML = nameSaved
const picUser = document.querySelector('.picUser')

picUser.addEventListener('click', ()=>{
    localStorage.clear();
    window.location='login.html'
})