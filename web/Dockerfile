FROM node:6-alpine
RUN adduser -D humankind

# Create app directory
RUN mkdir -p /src/web && chown -R humankind /src/web
WORKDIR /src/web
USER humankind

# Install app dependencies
COPY package.json /src/web/
RUN npm install

# Bundle app source
COPY . /src/web

# Build and optimize react app
# RUN npm run build

EXPOSE 3001

# defined in package.json
CMD [ "npm", "start" ]
