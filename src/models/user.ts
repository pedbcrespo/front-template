class User {
    private cpf: string;
    private username: string;
    private password: string;

    constructor(cpf:string, username: string, password: string) {
        this.cpf = cpf;
        this.username = username;
        this.password = password;
    }
}

export default User;