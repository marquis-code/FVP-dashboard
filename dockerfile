FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install --no-package-lock
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]