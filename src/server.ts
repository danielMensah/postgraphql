import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.app.use('/graphql', bodyParser.json(), graphqlExpress({ schema })); // The GraphQL endpoint
        this.app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // GraphiQL, a visual editor for queries
    }

    start() {
        this.app.listen(4000, () => {
            console.log('Go to http://localhost:4000/graphiql to run queries!');
        });
    }
}

const server = new Server();
server.start();
