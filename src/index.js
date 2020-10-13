const send = require('./communication/send');
const receive = require('./communication/receive');

send.sendMsg('Jees eliks...');

setTimeout(() => {
    receiveMessages();
}, 3000);