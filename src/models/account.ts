import User from "./user";

class Account {
    private user:User;
    private balance: number;

    constructor(user: User, balance: number) {
        this.user = user;
        this.balance = balance;
    }
}

export default Account;