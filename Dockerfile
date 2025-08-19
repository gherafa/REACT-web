    # Use a Node.js base image for building the React app
    FROM node:lts-alpine AS build

    # Set environment variables for npm
    ENV NPM_CONFIG_UPDATE_NOTIFIER=false
    ENV NPM_CONFIG_FUND=false

    # Set the working directory inside the container
    WORKDIR /app

    # Copy package.json and package-lock.json to install dependencies
    COPY package*.json ./

    # Install dependencies
    RUN npm ci

    # Copy the rest of your application files
    COPY . .

    # Build the React application
    RUN npm run build

    # Use a lightweight Nginx image for serving the built React app
    FROM nginx:alpine

    # Copy the Caddyfile (or Nginx config) if you are using one for custom routing/serving
    # If not using Caddy/custom Nginx config, you can remove this and directly copy the build output
    # COPY Caddyfile /etc/caddy/Caddyfile 

    # Remove the default Nginx configuration
    RUN rm /etc/nginx/conf.d/default.conf

    # Copy your custom Nginx configuration if you have one, or create a simple one
    COPY nginx/default.conf /etc/nginx/conf.d/default.conf

    # Copy the built React app from the build stage to the Nginx serving directory
    COPY --from=build /app/build /usr/share/nginx/html

    # Expose the port Nginx listens on (default is 80)
    EXPOSE 80

    # Command to start Nginx
    CMD ["nginx", "-g", "daemon off;"]