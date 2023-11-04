
// Se declara la función findOne que tiene 2 argumentos: un array y un objeto con la propiedad key
//  y el valor value.
const findOne = (list, { key, value }) => {
    return new Promise( (resolve,reject) => {  // Se crea una nueva promesa.
        setTimeout(() => {// La funcion setTimeOut establece un retraso de 2 segundos antes de ejecutar la función.
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
  
  console.log('findOne success'); //se muestra mensaje por consola.
  
  findOne(users, { key: 'name', value: 'Carlos' }) //llamada a la funcion findOne.
    .then(element => {                             //Se utiliza .then para manejar el resultado satisfactorio de búsqueda. 
        console.log (`user: ${element.name}`);     //Se muestra mensaje con el nombre del usuario por pantalla.
    })

    .catch(error => {                              //Se utiliza .catch para manejar el error.
        console.log(error);                        //Se muestra el error por pantalla.
    
    });

    
  
  console.log('findOne error'); //se muestra mensaje por consola.


  findOne(users, { key: 'name', value: 'Fermin' }) //llamada a la función findOne.
  .then(element => {                               //Se utiliza .then para manejar el resultado satisfactorio de búsqueda. 
    console.log (`user: ${element.name}`);         //Se muestra mensaje con el nombre del usuario por pantalla.
    })

.catch(error => {                                 //Se utiliza .catch para manejar el error.
    console.log(error);                           //Se muestra el error por pantalla.

    });
  
  /*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
  