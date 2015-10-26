import crypto = require("crypto");
var respuesta:string;
// Cuando recibe un mensaje del proceso padre...
process.on('message', (message:any) => {
	// Imprime el mensaje recibido.
	console.log("Child received: "+ message.text);
	respuesta = message.text;
	// Encripta y envía el mensaje recibido al proceso padre...
	process.send(crypto.createHash('sha256').update(respuesta, 'utf8').digest('hex'));
});