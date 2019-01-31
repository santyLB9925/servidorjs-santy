// var express = require('express')
// var aplicacion = express()


// const net = require('net')
// const server= require('http').Server(aplicacion)
// const os= require('os')
// // socket= require('socket.io')(server)
// var Host =IpDinamic
// var Interface=os.networkInterfaces();
// var IpDinamic

// for (var k in Interface){
//   for(var k2 in Interface[k]){
//     var address= Interface[k][k2]
//     if(address.family=="IPv4"&&!address.internal){
//       IpDinamic=address.address.toString('utf8');
//       console.log(IpDinamic)
//     }
//   }
// }

// var PORT = process.env.PORT || 39584;
// // server.listen(Port, function(){
// //      console.log('servidor activo '+Port+':'+Host)
// // })
// var ser = net.createServer(function(so){
//    // console.log(so)
// console.log('Usuario Conectado '+ so.remoteAddress + so.remotePort)
//     //     so.on('connect',function(){
// // console.log('usuario nuevo');
// //     })
// // so.on('data', function(data){
// // console.log(data.toString('utf8'))
// // })
// so.on('close',function(){
//   //  console.log('Usuario Desconectado')
// })
// console.log('Usuario Desconectado')
// })

// ser.listen(Port,Host);
// // console.log('hola node')
var express = require('express')
var aplicacion = express()


const net = require('net')
const server= require('http').Server(aplicacion)
const os= require('os')
// socket= require('socket.io')(server)
var Host =IpDinamic
var Interface=os.networkInterfaces();
var IpDinamic

for (var k in Interface){
  for(var k2 in Interface[k]){
    var address= Interface[k][k2]
    if(address.family=="IPv4"&&!address.internal){
      IpDinamic=address.address.toString('utf8');
      console.log(IpDinamic)
    }
  }
}

var PORT = process.env.PORT || 39584;
// server.listen(Port, function(){
//      console.log('servidor activo '+Port+':'+Host)
// })
var ser = net.createServer(function(so){
   // console.log(so)
console.log('Usuario Conectado '+ so.remoteAddress + so.remotePort)
    //     so.on('connect',function(){
// console.log('usuario nuevo');
//     })
// so.on('data', function(data){
// console.log(data.toString('utf8'))
// })
so.on('close',function(){
  //  console.log('Usuario Desconectado')
})
console.log('Usuario Desconectado')
})

ser.listen(PORT);
// console.log('hola node')