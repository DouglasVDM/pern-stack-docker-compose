# Stage1: Frontend and Backend Build
FROM node:14 AS build
WORKDIR /usr/src

# Copying both frontend and backend files
COPY frontend/ ./frontend/
COPY backend/ ./backend/

# Building frontend
RUN cd frontend && npm install && npm run build

# Building backend
RUN cd backend && npm ci && ENVIRONMENT=production npm run build

# Stage2: Nginx to serve frontend and proxy to backend
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built frontend files from the previous stage
COPY --from=build /usr/src/frontend/build .

# Copy Nginx configuration to serve the frontend and proxy to backend
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired frontend port (3000)
EXPOSE 3000

# Expose the desired backend port (5001)
EXPOSE 5001

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
