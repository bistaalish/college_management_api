# Use the official Node.js base image
FROM node:latest

# Set the working dicretory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY src/ .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV MONGODB_URI="your_database_url"


# Command to run the application
