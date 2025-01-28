# Use latest node version as base image on alpine
FROM node:lts-alpine 

# Create app directory
WORKDIR /app

# Copy package.json and package.lock.json to newly created app 
COPY package*.json ./

# Copy client/package.json to newly created app 
COPY client/package*.json client/
# Install prod wanted dependencies for client
RUN npm run install-client --omit=dev

# Copy server/package.json to newly created app 
COPY server/package*.json server/
# Install prod wanted dependencies for server
RUN npm run install-server --omit=dev

# copy client content to new app
COPY client/ client/
# Build client of the project
RUN npm run build --prefix client

# copy server content to new app
COPY server/ server/

# use the node user instead of root user
USER node

# Start server on container
CMD [ "npm", "start", "--prefix", "server"]

# Expose port 8000 which has server running on
EXPOSE 8000