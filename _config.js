var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://kefahngwei:kessiekandali@cluster0.gve83p2.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://kefahngwei:kessiekandali@cluster0.gve83p2.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://kefahngwei:kessiekandali@cluster0.gve83p2.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
