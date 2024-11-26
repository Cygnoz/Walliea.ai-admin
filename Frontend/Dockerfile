# Build stage
FROM node:20-alpine AS build

# Install system dependencies
RUN apk add --no-cache git curl python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Clear npm cache and set registry
RUN npm cache clean --force && \
    npm config set registry https://registry.npmjs.org/

# Install dependencies with fallback mechanism
RUN npm install --legacy-peer-deps || \
    (sleep 5 && npm install --legacy-peer-deps) || \
    (sleep 10 && npm install --legacy-peer-deps)

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]