//Yosselin Roxana Flores García
var nombres = [`jose`, `pedro`, `juan`]
nombres.push(`Rosa`)
nombres.pop()
nombres.unshift(`Emilia`)
nombres.indexOf("Pedro")
nombres.indexOf("pedro")
nombres.shift()
///arreglos con clave y valor
var data = [
    {nombre: `jose`, edad: `25`},
    {nombre: `alfredo`, edad: 30},
    {nombre: `carmen`, edad: 30}        
]

data.forEach(function(dato){
    console.log(dato.nombre)
})

var resultado = data.filter(function(dato){
    return dato.edad>25
})

var resultado = data.map(function(dato){
    return dato.nombre
})

//objetos
var alumno ={
    nombre: `Pedro`,
    apellido: `Guardado`,

    mostrarDatos: function(){
        console.log(`${this.nombre}, ${this.apellido}`)
    }
}
alumno.mostrarDatos()
