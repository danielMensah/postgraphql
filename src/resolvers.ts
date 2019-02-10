export default {
    Query: {
        getUsers: async (_, __, { dataSources }) => {
            return dataSources.userAPI.getUsers();
        }
    },
};