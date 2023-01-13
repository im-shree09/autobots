FROM node:15.13-alpine

WORKDIR /usr/src/autobots-react-container-3

# COPY package.json package-lock.json ./

# RUN npm install 

# RUN npm install react-scripts@5.0.1 -g 



COPY . ./

EXPOSE 3000

RUN npm run build 

CMD [ "npm"  , "start"]