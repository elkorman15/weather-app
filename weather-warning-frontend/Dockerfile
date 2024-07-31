# Use an official Node.js runtime as a parent image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build --prod

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy built assets from the build stage
COPY --from=build /usr/src/app/dist/weather-warning-frontend/browser /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run the web server
CMD ["nginx", "-g", "daemon off;"]