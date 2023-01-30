//mostrar ocultar div
const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//constantes para agregar elementos
const addItemInput = document.querySelector('#addItem') //input: text
const addItemButton = document.querySelector('button#addItemButton') //hace referencia al control y al nombre del elemento

//constante para el boton quitar 
const removeItem = document.querySelector('button#removeItem')


//agregar los eventos al boton ocultar/mostrar
hidebtn.addEventListener('click', ()=>{
    if(listDiv.style.display=='none'){
        listDiv.style.display='block'
        hidebtn.textContent='Ocultar'
    }else{
        listDiv.style.display='none'
        hidebtn.textContent='Mostrar'
    }
    
}) 

//agregar elementos a la lista

addItemButton.addEventListener('click', ()=>{
    //declarar un elemento de lista
    //utilizamos let cuando tenemos alcance local
    let list =document.querySelector('ul')
    let li= document.createElement('li')
    //Ejerciciooo1: Evaluar si el input esta vacio, no debe agregar el elemento, al agregar el elemento debera limpiar el input y regresar el enfoque al input
    if( addItemInput.value){
        li.textContent = addItemInput.value 
        list.appendChild(li)
        addItemInput.value = ""
        
    }else {
        alert("El input se encuentra vacio, por favor escribe el nombre de la fruta.")
        addItemInput.focus();
    }

})

//funcion para obtener el indice del elemento en la lista
//declarar el elemento items
var list=document.getElementById('listItems'),
    items=list.getElementsByTagName('li')


const findIndex =(element) => {
    var len = items.length  //items va a ser el arreglo.
    for(var i=0; i<len; i++){
        if(items[i]===element){
            return i 
        }
    }
}

list.onclick = (e) =>{
    let event=e || window.event
    src=event.target

    let myIndex = findIndex(src)
    index=myIndex
    //alert (myIndex)
    list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-danger'))
    items[myIndex].classList.add('alert', 'alert-danger')
}

//Eliminar el elemento de la lista
//Ejericioooooo3: alerta que pregunte si esta seguro de eliminar el elemento,
//si dice que no se quita la seleccion de eliminar el estilo
removeItem.addEventListener('click', () => {
    let eliminar = window.confirm("¿Estas seguro que deseas eliminar la fruta?")

    if (eliminar === true ){
        items[index].parentNode.removeChild(items[index])

    }
}) 






