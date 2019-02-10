import { User } from "./datasources/model";

export default {
    Query: {
        getUsers: async (_, __, { dataSources }) => dataSources.userAPI.getUsers()
    },
    Mutation: {
        createUser: async (_, userData: User, { dataSources }) => {
            const ab = await dataSources.userAPI.createUser(userData);
            console.log(ab);
            return ab;
        }
    }
};