function editarHomeParrafo () {
    const p = document.getElementById("home_parrafo");
    p.setAttribute("contentEditable", "true");
    p.focus();
}

function editarHomeH1 (){
    const h1 = document.getElementById("home_h1");
    h1.setAttribute("contentEditable", "true");
}

// Hace clic en el boton editar parrafo del home
const btn_edit_home_p = document.getElementById("btn-edit-home-p");
btn_edit_home_p.onclick = editarHomeParrafo;

// Se agrega un evento que escucha cuando se preciona el enter para terminar la edicion.
const texto_home_p = document.getElementById("home_parrafo");
texto_home_p.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter'){
        document.getElementById("home_parrafo").setAttribute('contentEditable', 'false');
    }
});

const btn_edit_home_h1 = document.getElementById("btn-edit-home-h1");
btn_edit_home_h1.onclick = editarHomeH1;
