# tuwien-inso-bachelorthesis-tenderclass-frontend

tenderclass is an automated screening system for public procurement notices using state-of-the-art Machine Learning and Natural Language Processing (NLP) frameworks.
This git repository holds the Angular/Bootstrap-based front end of tenderclass. It is responsible for displaying tender recommenations in a web-based graphical user interface (GUI).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Node.js](https://nodejs.org/en/)
- [Angular](https://angular.io/)</br>
  `$ npm install -g @angular/cli`
- [Bootstrap for Angular](https://getbootstrap.com/)</br>
  `$ npm install -g bootstrap`

- OPTIONAL: If you want to deploy it as a Docker container: [Docker](https://www.docker.com/) runtime environment

### Installing

1. Clone this repository into your directory of choice.<br/>
`$ git clone https://github.com/ngriebenow/tuwien-inso-bachelorthesis-tenderclass-frontend`

2. Navigate to the root directory `tenderclass-frontend`.<br/>
`$ cd tenderclass-frontend`

3. Start the development web server.</br>
`ng serve`

4. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

5. Make sure that tenderclass-backend is running. Otherwise the front end will not display any tenders.

## Deployment

You can deploy the front end of tenderclass by using a Docker container.

1. Clone this repository into your directory of choice.<br/>
`$ git clone https://github.com/ngriebenow/tuwien-inso-bachelorthesis-tenderclass-frontend`

2. Navigate to the root directory `tenderclass-frontend`.<br/>
`$ cd tenderclass-frontend`

3. Build the Docker container.<br/>
`docker build -t="tenderclass-frontend" .`

4. Start the docker container.<br/>
`docker start tenderclass-frontend`

5. OPTIONAL: Tag the docker container and push it to Dockerhub for using it on a Kubernetes cluster.<br/>
`docker tag tenderclass-frontend <DOCKERHUB_USERNAME>/tcfe`
`docker push <DOCKERHUB_USERNAME>/tcfe`

## Architecture
- src/app/components: This folder holds the UI pages. The `recommendation` component is repsonsible for fetching the recommendations from tenderlass back end and showing them as cards.
- src/app/dtos: This folder holds the Data Transfer Objects (Entities), the Tender and LanguageEntity.
- src/app/service: This folder holds the services which handle the communication with tenderclass back end.
