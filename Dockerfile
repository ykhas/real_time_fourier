# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container

COPY package*.json ./

# Install the project dependencies

RUN npm install -g browserify && cd /app && npm install


# # Copy the rest of your application code to the container
COPY . .

# # Expose a port if your development server runs on a specific port (e.g., 3000 for React)
# EXPOSE 3000

# CMD 
# # Command to run your application or development server
# CMD ["js/do_fourier.js", "-o", "bundle.js"]
