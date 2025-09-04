# frontend/Dockerfile
# Gunakan node image yang lebih spesifik
FROM node:18.17.0-alpine3.18 as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Clear npm cache dan install dependencies
RUN npm cache clean --force && \
    npm install --silent

# Copy source code
COPY . .

# Build aplikasi
RUN npm run build

# Stage production
FROM nginx:1.25.2-alpine

# Copy build output ke nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]