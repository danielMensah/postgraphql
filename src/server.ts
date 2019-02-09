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
        this.app.set('port', (process.env.PORT || 4000));
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Node app is running on port:', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
