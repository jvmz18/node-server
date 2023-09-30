

const Menu = () => {

return new Promise (resolve => {


 console.clear();
 console.log('************************');
 console.log(       'opciones'         );
 console.log('************************');

 console.log(`1. crear tarea`);
 console.log(`2. lis tareas`);
 console.log(`3. lis tareas completadas`);
 console.log(`4. lis tareas pendientes`);
 console.log(`5. completar tarea(s)`);
 console.log(`6. borrar tarea`);
 console.log(`0. salir \n`);

 const readeline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
   });

readeline.question('selecciones una opcion: ', (op) => {
    readeline.close();
    resolve (op);
   })
});
    

}

const pausa = () => {

    return new promise (resolve => {

     const readeline = require ('readline').createInterface({
        input: process.stdin,
        output: process.stdout
     });

      readeline.question(`\n presiones ${'enter'} para continuar` , (op) => {
        readeline.close();
        resolve();
      })
    });

}

module.exports = Menu,pausa
    
