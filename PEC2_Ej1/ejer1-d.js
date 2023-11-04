
// Se declara la función findOne que tiene 2 argumentos: un array y un objeto con la propiedad key
//  y el valor value.
const findOne = (list, { key, value }) => {
    return new Promise( (resolve,reject) => {  // Se crea una nueva promesa.
        setTimeout(() => {// La función setTimeOut establece un retraso de 2 segundos antes de ejecutar la función.
            const element = list.find(element => element[key] === value); //Se hace busqueda con el metodo find() del array list si coincide la key de element estrictanente al valor value.
            element ? resolve(element) : reject('ERROR: Element Not Found'); //Se resolverá o rechazará la promesa dependiendo de la condición.
          }, 2000); //Se establece el retraso de 2 segundos.
    } );
};

const users = [  // Se declara el array con los objetos user.
{
  name: 'Carlos', //Clave.
  rol: 'Teacher' //Valor.
},
{
  name: 'Ana', //Clave.
  rol: 'Boss' //Valor.
}
];

const findUser = async ({ key, value }) => {  // Se declara la funcion asincrona findUser que que recibe un objeto con 2 propiedades
   
    try {                                                  // Bloque try de código que puede generar excepciones.
      const user = await findOne(users, { key, value });  // Con await se llama a la función findOne con el array users y el objeto como argumentos. 
      console.log(`user: ${user.name}`);  // se muestra el usuario encontrado por pantalla.
    } catch (error) {  // Se captura el error.
      console.log(error); // Se muestra el error por pantalla
    }
  
  };

console.log('findOne success'); // Se muestra mensaje por consola.
console.log('findOne error');  // Se muestra mensaje por consola.



    Promise.all([findUser({key: 'name', value: 'Carlos'}), findUser({key: 'name', value: 'Fermin'})]) // Se usa Promise.all para ejecutar ambas llamadas en paralelo
    .then(() => {                                                                                       //Se utiliza .then para manejar el resultado satisfactorio de búsqueda. 
        console.log('Se han ejecutado las llamadas '); // se muestra el mensaje de finalización de las llamadas.
    })
    .catch(error => { // Se captura el error.
        console.log(error); // Se muestra el error por pantalla
    });

