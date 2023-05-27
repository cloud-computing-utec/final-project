# Cloud Computing Final Project

## Application definition
This app will emulate a transactional system, in which users possess a monetary balance and are capable of performing transactions that will alter this balance.

## Functionalities
This is a event-driven software,a Software design in which the flow of execution and program actions are primarily driven by events, such as user interaction, changes in data, or external signals.



## Technical details
Following all the requirements given by the project outline, this project is intended to be developed with:

<ul>
<li>Docker Componse</li>
<li>Nest.js</li>
<li>Apache Kafka</li>
<li>TypeOrm: Migrations, Entities</li>
<li>GraphQL</li>
<li>Stress Test made with K6</li>
</ul>

We will have two servers:
* The main server: Will store the users information as well as their balance, and will also be responsible for updating the users' balance after each transaction.
* The validation server: Will perform validations asynchronously and periodically to verify that the transactions were executed correctly.

The main idea of this architecture is to implement a microservice that takes care of the transaction validation async so the main server can continue processing new incoming transactions.

**Additional tech stack**

## Kafka

Kafka will ensure that all data will be delivered to the server and antifraud service, so they just need to wait to Kafa to come with a request.

## GraphQL

Graphql wil reduce the number of database requests by grouping requests coming from clients and sharing between those requests the response of only one db query, Otherwise we must do a db query for eaach request.


## Running the project
Instead of running the project, you can see me testing the project [here](https://www.youtube.com/watch?v=JOMq55FhS-M)
### Create and build all services

Go to the repo root and run
`docker-compose up`

Now all containers will be created and each of them will install all the dependendencies.

This project already has migrations added, so the entities are going to be created and then initialized with seed data coming from the first migration.

## Cloud topics involved in the project
* Monitoring: We will monitor at all times the health of the two servers/pads used in our application, while stress testing them. At later stages, this could be improved through the use of Kubernetes.
* Load balancing: Our application has to process at least 5000 concurrent calls, if it were to be used as a transaction app.
* Scalability: We are going to manually handle the scalability of resources of our application, opting out of serverless architectures.



