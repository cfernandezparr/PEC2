
// Se declara la función findOne que tiene tres argumentos: un array, un objeto con la propiedad key
//  y el valor value y otro objeto que tiene dos funciones callback que se llamaran una u otra si se
//  cumple la condición o no de busqueda.
const findOne = (list, { key, value }, { onSuccess, onError }) => {



    setTimeout(() => {  // La funcion setTimeOut establece un retraso de 2 segundos antes de ejecutar la función.
      const element = list.find(element => element[key] === value); //Se hace busqueda con el metodo find() del array list si coincide la key de element estrictanente al valor value.
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }); // Si coincide la busqueda se ejecuta onSuccess y sino onError
    }, 2000); //Se establece el retraso de 2 segundos.
  };
  
  const onSuccess = ({ name }) => console.log(`user: ${name}`); //Se declara la función onSuccess que muestra por consola el nombre del usuario encontrado.
  const onError = ({ msg }) => console.log(msg); // Se declara la función onError que muestra un mensaje de error por consola.
  
  const users = [  // Se declara el array con los objetos user.
    {
      name: 'Carlos', //Clave
      rol: 'Teacher' //Valor
    },
    {
      name: 'Ana', //Clave
      rol: 'Boss' //Valor
    }
  ];
  
  console.log('findOne success'); //se muestra mensaje por consola.
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }); //Se llama a la función findOne con el value Carlos que dará un resultado satisfactorio.
  
  console.log('findOne error'); //se muestra mensaje por consola.
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }); //Se llama a la función findOne con el value Fermin que dará un resultado de error.
  
  /*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
  