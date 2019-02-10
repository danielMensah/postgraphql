import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import UserAPI from './datasources/userAPI';
import typeDefs from './schema';
import Store from "./utils/store";

class Server {
    private readonly server;

    constructor() {
        const store = new Store();

        this.server = new ApolloServer({
            typeDefs,
            resolvers,
            dataSources: () => ({
                userAPI: new UserAPI({ store }),
            })
        });
    }

    start() {
        const PORT = process.env.NODE_ENV === 'dev' ? 4000 : process.env.PORT;
        this.server.listen(PORT).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });
    }
}

const server = new Server();
server.start();