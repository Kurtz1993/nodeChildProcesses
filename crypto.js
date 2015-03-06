var crypto = require('crypto');
var respuesta;
// Cuando recibe un mensaje del proceso padre...
process.on('message', function (m){
	// Imprime el mensaje recibido.
	console.log("Child received: "+ m.text);
	respuesta = m.text;
	// Encripta y envía el mensaje recibido al proceso padre...
	process.send(crypto.createHash('sha256').update(respuesta, 'utf8').digest('hex'));
});