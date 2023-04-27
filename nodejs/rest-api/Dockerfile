FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Create a new user with UID 10014
RUN addgroup -g 10014 choreo && \
    adduser  --disabled-password --uid 10014 --ingroup choreo choreouser

# Set write permissions to the npm log files
RUN mkdir -p /home/choreouser
RUN chown -R choreouser:10014 /home/choreouser

# Set a non-root user
USER 10014

# RUN npm run dev
CMD [ "npm", "run", "dev" ]
