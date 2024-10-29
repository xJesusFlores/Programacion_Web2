const http = require('http');

// Creamos el servidor
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // Rutas del servidor
  if (req.url === '/') {
    // Página de inicio
    res.writeHead(200);
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pagina de Inicio</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #047884; }
          p{ color : GRAY;}
        </style>
      </head>
      <body>
        <h1>Inicio  ---> Puerto : 3309 </h1>
        <p>FES Aragon UNAM<br>Esta es la pagina principal del servidor.</p>
      </body>
      </html>
    `);
  } else if (req.url === '/form') {
    // Página del formulario
    res.writeHead(200);
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Formulario</title>
        <style>
          body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f4; }
          form { padding: 20px; border: 1px solid #ddd; background: #fff; border-radius: 5px; }
          input[type="text"], input[type="submit"] { display: block; margin-bottom: 10px; padding: 10px; width: 100%; }
        </style>
      </head>
      <body>
        <form>
          <label>Nombre:</label>
          <input type="text" name="nombre" required>
          <label>Email:</label>
          <input type="email" name="email" required>
          <br>
          <br>
          <input type="submit" value="Enviar">
        </form>
      </body>
      </html>
    `);
  } else if (req.url === '/info') {
    // Página de información
    res.writeHead(200);
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Informacion</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; background-color: WHITE; }
          h1 { color: #047884; }
          p { font-size: 18px; line-height: 1.6; }
        </style>
      </head>
      <body>
        <h1>Informacion</h1>
        <p>FES Aragon UNAM -->PROGRAMACION WEB 2<br>Flores Blancas Jesus Alberto <br>-->Esta pagina contiene informacion con algunos estilos aplicados.</p>
      </body>
      </html>
    `);
  } else {
    // Página 404
    res.writeHead(404);
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>404 - No encontrado</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; color: red; }
        </style>
      </head>
      <body>
        <h1>404 - Pagina No Encontrada</h1>
        <p>La pagina que estas buscando no existe.</p>
      </body>
      </html>
    `);
  }
});

// Escuchamos en el puerto 3009
const PORT = 3009;
server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
