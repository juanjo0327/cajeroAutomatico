var usuario = document.getElementById('usuario')
var contraseña = document.getElementById('contraseña')
var enviar = document.getElementById('enviar')


var perfiles = [
    {nombreUsuario: 'mali', contraseñaUsuario: '12', saldo: 200},
    {nombreUsuario: 'Gera', contraseñaUsuario: '123', saldo: 290},
    {nombreUsuario: 'maui', contraseñaUsuario: '1234', saldo: 67},
    {nombreUsuario: 'juan', contraseñaUsuario: '1234', saldo: 400},

]

const login = () => {
    if(usuario.value != '' && contraseña.value != ''){
        
        //Obtengo si el usuario y la contraseña que se ingreso coincide con alguno del array
        let credenciales = perfiles.find(credencial => credencial.nombreUsuario == usuario.value && credencial.contraseñaUsuario == contraseña.value)
        if(credenciales != null){
            window.open('http://127.0.0.1:5500/src/components/perfil/perfil.html', "_self");
            localStorage.setItem('usuario', credenciales.nombreUsuario);
            localStorage.setItem('password', credenciales.contraseñaUsuario)
            localStorage.setItem('saldo', credenciales.saldo)
        }else{
            alert('ERROR!, Credenciales incorrectos, favor de ingresar los correctos nuevamente')
        }
    }else{
        if(usuario.value == ''){
            alert('Proporcione informacion en el campo de usuario')
        }else{
            alert('Proporcione informacion en el campo de contraseña')
        }
    }
}

enviar.addEventListener('click', (event) => {
    event.preventDefault()
    login()
    usuario.value = '';
    contraseña.value = '';
})