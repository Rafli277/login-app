# Gunakan format yang konsisten untuk FROM
FROM node:18.17.0-alpine3.18 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install semua dependencies (termasuk devDependencies untuk build)
RUN npm install

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