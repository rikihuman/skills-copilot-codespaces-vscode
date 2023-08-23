// Create web server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
// Path: .devcontainer/Dockerfile
// Create image and start container
// FROM node:10
// # Install package
// RUN apt-get update && apt-get install -y git
// # Install Visual Studio Code
// RUN curl -fsSL https://code-server.dev/install.sh | sh
// WORKDIR /workspace
// EXPOSE 8080
// # Start code-server
// ENTRYPOINT ["code-server", "--bind-addr", "