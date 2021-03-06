FROM node:14-alpine as builder
WORKDIR /hugo-qr-book-client
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY --from=builder /hugo-qr-book-client/build .

