import { RESTDataSource } from 'apollo-datasource-rest';
import Utils from '../utils';
import { User } from "./model";

export default class UserAPI extends RESTDataSource {
    private utils;
    private store;

    constructor({ store }) {
        super();
        this.utils = new Utils();
        this.store = store;
    }

    async getUsers(): Promise<[User]> {
        const users = await this.store.pgFunction('rvf_get_users');

        return users.map(user => this.reducer(user));
    }

    private reducer(user): User {
        return {
            id: user.usr_uuid,
            firstName: user.usr_first_name,
            lastName: user.usr_last_name,
            gender: user.usr_gender,
            email: user.usr_email
        }
    }
}
