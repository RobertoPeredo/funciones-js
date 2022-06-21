
//recorrer arreglo con un for
let texto = '!Texto con JAvaScript'

for(let c of texto){
    console.log(c);
}

//recorrer cadena como arreglo normal
var nombre = 'Robert'
for(var i=0; i<=nombre.length; i++)
  {
    console.log(nombre[i])
  }


  //recorrer array 
  let colores = ["rojo","azul","blanco"]
  colores.forEach(elemento =>{
    console.log(elemento)
  })

  //recorrer array accediendo tambien al indice
  let colores1 = ["rojo","azul","blanco"]
  colores1.forEach((elemento,index) =>{
    console.log(`${index } => ${elemento}`)
  })
