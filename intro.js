//Yosselin Roxana Flores García
var nombres =['jose', 'pedro', 'juan']
function funcionDeclarativa(nombre){console.log(`Buenas tardes, ${nombre}`)
} 
const functionExpresion = function(nombre){
    console.log(`Hola, funcion expresion, ${nombre}`)
} 
const funcionFlecha=nombre=>{
    console.log(`Hola, funcion de flecha, ${nombre}`)
} 
for (var i=0; i<nombres.length; i++){ funcionDeclarativa(nombres[i]) 
        functionExpresion(nombres[i]) 
        funcionFlecha(nombres [i])
}

