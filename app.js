
const Menu = require('./auxiliares/mensajes'); 


const main = async()=> {

      let op = '';
      do {
            op = await Menu(); 
            console.log({ op });
      
             if (op !== '0') await pausa();

      } while ( op !== '0');

      Menu();
      //pausa();
}

main();
