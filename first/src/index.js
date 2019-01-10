const server = require('./server');
const settings = require('./config/settings');

server.listen(settings.port, () => console.log(`Server is running on port ${settings.port}`));

module.exports = server;
