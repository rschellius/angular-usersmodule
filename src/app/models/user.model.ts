export class User {
    _id: string;
    firstname: String;
    lastname: String;
    email: String;
    meta: {
        createdAt: Date;
        updatedAt: Date;
        loggedIn: [Date];
    };
    roles: [String];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
