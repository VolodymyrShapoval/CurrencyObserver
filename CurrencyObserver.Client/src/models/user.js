export class User{
    constructor(name, email, question, details){
        this.name = name;
        this.email = email;
        this.question = question;
        this.details = details;
    }

    getValues() {
        return this.name, this.email, this.question, this.details;
    }
}