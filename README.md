# nasa-pet-project

This is a pet project leveraging GitHub Actions and the MERN stack (MongoDB, Express.js, React.js, Node.js) for API development.

## Overview

The aim of this project is to help understand the usage of GitHub Actions along with the MERN stack to develop a robust API. Docker is used to ensure the application runs seamlessly in any environment.

## Prerequisites

Ensure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js] (https://nodejs.org)
- [MongoDB](https://mongo.com/)
- [Express.js](https://expressjs.)

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

## Contributing

Please feel free to fork this repository, make some changes, and submit pull requests. Feedback is welcome and appreciated!
