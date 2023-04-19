
# Stage1: Frontend Build
FROM node:14-slim AS frontend-build
WORKDIR /usr/src
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

# Stage2: Backend Build
FROM node:14-slim AS backend-build
WORKDIR /usr/src
COPY backend/ ./backend/
RUN npm i
# Adding bash because Alpine base image doesn't have bash pre-installed
RUN apt update && apt add bash
RUN cd backend && npm install && ENVIRONMENT=production npm run build
RUN ls

# Stage3: Packagign the app
FROM node:14-slim
WORKDIR /root/
RUN npm install pg
COPY --from=frontend-build /usr/src/frontend/build ./frontend/build
COPY --from=backend-build /usr/src/backend/dist .
# COPY backend/swagger.css .
RUN ls

EXPOSE 3080

CMD ["node", "backend.bundle.js"]