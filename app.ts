// var cp = require('child_process'); // Utiliza child processes
// // Fork se utiliza cuando se ejecutará otro script como child process
// // exec se utiliza para ejecutar comandos del shell.
// var exec = cp.exec;

// x = exec('echo "Hello, world"', function (error, stdout, stderr){
// 	console.log("Stdout: ", stdout);	// Salida del comando
// 	console.log("Stderr: ", stderr);	// Errores del comando
// 	if(error !== null){					// Errores del comando exec
// 		console.log("exec error: ", error)
// 	}
// });

// // var n = cp.fork(__dirname + '/crypto.js');
// // n.send({text: "Original message"});	// Envia un mensaje (objeto) al child process.

// // Cuando recibe un mensaje del child process...
// var n = cp.fork(__dirname + '/crypto.js');
// for(i=0; i<5; i++){
// 	n.send({text: "Original message"});	// Envia un mensaje (objeto) al child process.	
// }
// n.on('message', function(m){
// 	console.log("PARENT got message: ", m);	// Imprime el mensaje
// 	process.kill(n.pid);	// Termina el proceso.
// 	console.log("Process terminated..."); 
// });

import childProcess = require("child_process");
var spawn       = childProcess.spawn;
var workers:any = [];

var killWorkers = () => {
  workers.forEach((worker) => {
    process.kill(worker);
  });
};

process.on("uncaughtException", killWorkers);
process.on("SIGINT", killWorkers);
process.on("SIGTERM", killWorkers);
// for(i=0; i<25; i++){
var new_worker = spawn("tail", ["-f", "/dev/null"]);
workers.push(new_worker);
console.dir(new_worker)
console.log(new_worker.pid)
// }