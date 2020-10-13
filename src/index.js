const amqp = require('amqplib/callback_api');

// Hyper-V Ubuntu Docker RabbitMQ Server => 192.168.100.42
amqp.connect('amqp://192.168.100.42', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        let queue = 'hello';
        let msg = "Hello World!, Here's Johnny !";

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);
});
