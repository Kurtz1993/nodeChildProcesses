var cp = require('child_process'); // Utiliza child processes
// Fork se utiliza cuando se ejecutará otro script como child process
var n = cp.fork(__dirname + '/crypto.js');
// exec se utiliza para ejecutar comandos del shell.
var exec = cp.exec;

x = exec('echo "Hello, world"', function (error, stdout, stderr){
	console.log("Stdout: ", stdout);	// Salida del comando
	console.log("Stderr: ", stderr);	// Errores del comando
	if(error !== null){					// Errores del comando exec
		console.log("exec error: ", error)
	}
});

n.send({text: "Original message"});	// Envia un mensaje (objeto) al child process.

// Cuando recibe un mensaje del child process...
n.on('message', function(m){
	console.log("PARENT got message: ", m);	// Imprime el mensaje
	n.kill();	// Termina el proceso.
	console.log("Process terminated..."); 
});
