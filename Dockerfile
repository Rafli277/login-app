# Gunakan format yang konsisten untuk FROM
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install HANYA production dependencies (lebih aman)
RUN npm ci --only=production

# Copy source code
COPY . .

# Build aplikasi
RUN npm run build

# Stage production
FROM nginx:1.25-alpine

# Copy build output ke nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]