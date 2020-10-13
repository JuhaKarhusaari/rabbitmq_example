const amqp = require('amqplib/callback_api');

const sendMsg = (msg) => {
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
        let message = msg;

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(message));

        console.log(" [x] Sent %s", message);
    });
    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);
    return (message);
});
};

module.exports = { sendMsg };