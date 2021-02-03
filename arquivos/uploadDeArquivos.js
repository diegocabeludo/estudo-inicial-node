const fs = require('fs')

// fs.readFile('./assets/cachorro.jpg', (erro, buffer) => { 
//     console.log('A imagem foi bufferizada');
//     console.log(buffer);

//     fs.writeFile('./assets/labrador.jpg', buffer, (erro) => {
//         console.log('Imagem foi escrita');
//     })
// })

fs.createReadStream('./assets/cachorro.jpg')
    .pipe(fs.createWriteStream('./assets/cachorro-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))

