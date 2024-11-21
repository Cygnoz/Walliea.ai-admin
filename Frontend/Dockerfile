# Build stage
FROM node:20-alpine AS build

# Install system dependencies
RUN apk add --no-cache git curl

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Clear npm cache and use specific registry with increased timeout
RUN npm cache clean --force && \
    npm config set registry https://registry.npmjs.org/ && \
    npm install --network-timeout 600000 --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Debug and build steps
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]