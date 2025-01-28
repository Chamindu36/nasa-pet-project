# nasa-pet-project

This is a pet project leveraging GitHub Actions and the MERN stack (MongoDB, Express.js, React.js, Node.js) for API development.

**Public Docker Image of this project** - [📥Download](https://hub.docker.com/repository/docker/chamindu36/nasa-pet-project/general)

## Overview

The aim of this project is to help understand the usage of GitHub Actions along with the MERN stack to develop a robust API. Docker is used to ensure the application runs seamlessly in any environment.

## Prerequisites

Ensure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://expressjs.com/)

## Steps to Run

1. **Clone the Repository**

   Start by cloning the repository to your local machine

   ```bash
   git clone https://github.com/chamindu36/nasa-pet-project.git
   cd nasa-pet-project
   ```

2. **Build the Docker Image**

   Next, build the Docker image using the following command:

   ```bash
   docker build . -t <USERNAME>/nasa-pet-project
   ```

   Be sure to replace `<USERNAME>` with your DockerHub username.

3. **Run the Docker Image**

   Finally, run the Docker image using the following command:

   ```bash
   docker run -it -p 8000:8000 <USERNAME>/nasa-pet-project
   ```

   Again, replace `<USERNAME>` with your DockerHub username. The application will then be accessible at `http://localhost:8000`.


## Project Setup in local & Commands

This project has a client-server structure, with each having its own separate dependencies. Below are the npm scripts to manage these dependencies, start the servers, and deploy the project.

### Installation

To install dependencies for the server, run:

```bash
npm run install-server
```

To install dependencies for the client, run:

```bash
npm run install-client
```

To install dependencies for both client and server, run:

```bash
npm run install
```

### Running the Servers

To start the server, run:

```bash
npm run server
```

To start the client, run:

```bash
npm run client
```

To start both the server and the client at the same time, run:

```bash
npm run watch
```

### Deployment

To build the client and start the server, run:

```bash
npm run deploy
```

To build the client and start the server in cluster mode, run:

```bash
npm run deploy-cluster
```

### Testing

To run tests for the server, use:

```bash
npm run test
```
Please replace `npm` with `yarn` if you're using yarn as your package manager.

## Contributing

Please feel free to fork this repository, make some changes, and submit pull requests. Feedback is welcome and appreciated!
