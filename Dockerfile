FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start-build"]