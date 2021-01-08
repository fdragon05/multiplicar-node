

const fs = require('fs');
var colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {

    console.log('=================='.green);
    console.log(`==tabla de ${base}==`.green);
    console.log('=================='.green);

    return new Promise((resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for(let i = 1; i <= limite; i++){

            // const base = ${base};
             data += `${base} * ${i} = ${base*i}\n`;
         }

         resolve(data);
         

    })

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for(let i = 1; i <= limite; i++){

            // const base = ${base};
             data += `${base} * ${i} = ${base*i}\n`;
         }
         
         fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
             if (err) 
                reject(err);
             else
                resolve(`tabla-${base}-al-${limite}.txt`);
           });

    })

}

module.exports ={
    crearArchivo,
    listarTabla
}

