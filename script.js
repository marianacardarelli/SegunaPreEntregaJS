//Array con objetos de plantas nacionales
var plantasArgentinas = [
    { id: 1, nombre: 'Ceibo', tipo: 'Árbol', region: 'Noroeste', epocaPlantacion: 'Primavera' },
    { id: 2, nombre: 'Yerba Mate', tipo: 'Planta', region: 'Litoral', epocaPlantacion: 'Primavera' },
    { id: 3, nombre: 'Palo Borracho', tipo: 'Árbol', region: 'Noreste', epocaPlantacion: 'Primavera' },
    { id: 4, nombre: 'Ñandubay', tipo: 'Árbol', region: 'Centro', epocaPlantacion: 'Otoño' },
    { id: 5, nombre: 'Chañar', tipo: 'Árbol', region: 'Cuyo', epocaPlantacion: 'Otoño' },
    { id: 6, nombre: 'Caldén', tipo: 'Árbol', region: 'Pampa', epocaPlantacion: 'Otoño' },
    { id: 7, nombre: 'Cardo Azul', tipo: 'Planta', region: 'Patagonia', epocaPlantacion: 'Primavera' },
    { id: 8, nombre: 'Llareta', tipo: 'Planta', region: 'Andina', epocaPlantacion: 'Invierno' },
    { id: 9, nombre: 'Lapacho', tipo: 'Árbol', region: 'Noroeste', epocaPlantacion: 'Primavera' },
    { id: 10, nombre: 'Araucaria', tipo: 'Árbol', region: 'Patagonia', epocaPlantacion: 'Primavera' },
]
let carrito=[]
let opcion 
do {
   opcion= Number(prompt("Ingrese la opción deseada\n1- Buscar producto\n2- Filtrar producto por categoría\n3- Agregar producto al carrito\n4- Finalizar "))
    if (opcion===1){
        let id= Number(prompt("Ingrese id de producto deseado\n"+mostrarListaProductos(plantasArgentinas)))
        let productoBuscado= plantasArgentinas.find(plantas=> plantas.id===id)
    if (productoBuscado){
    alert("El producto buscado es "+ productoBuscado.nombre)
     }
      else {
        alert("No existe producto con ese id")
      }     
    }
    else if (opcion===2){
        fitrarPorTipoDePlanta(plantasArgentinas)        
    }
    else if (opcion===3) {
        let id= Number(prompt("Ingrese id del producto para agregar al carrito\n"+mostrarListaProductos(plantasArgentinas)))
        let productoSeleccionado= plantasArgentinas.find(planta=>planta.id===id)
        carrito.push(productoSeleccionado)
    
    
    
    }
} while (opcion!== 4)

function mostrarListaProductos(plantas){
    let salida="Id- Nombre del producto"
plantas.forEach(planta => {
salida=salida+"\n"+ planta.id+"-"+planta.nombre+"\n"    
})
return(salida)
}

function fitrarPorTipoDePlanta(plantas){
    let categoriaBuscada= prompt("Ingrese la categoria (tipo) de producto a filtrar:")
    let productosFiltrados=plantas.filter(planta => planta.tipo.toLowerCase()===categoriaBuscada.toLowerCase())
if (productosFiltrados.length>0) {
    let salida= "Se encontraron los siguientes productos en la categoría "+categoriaBuscada+":"
    productosFiltrados.forEach(planta=>{
        salida= salida+"\nID: "+ planta.id+" Nombre: "+planta.nombre
    }) 
    alert(salida)
} else{
    alert("No se encontraron productos con la categoria proporcionada.")
}
}