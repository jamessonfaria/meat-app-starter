export class User {
    constructor(
        public email: string, 
        public name: string, 
        private password: string){}

    
    matches(another: User): boolean{
        return another !== undefined && 
                another.email === this.email && 
                another.password === this.password
    }
}

export const users: {[key: string]: User} = {
    "jualiana@aol.com": new User('jualiana@aol.com', 'juliaa', 'ju123'),
    "a@aol.com": new User('a@aol.com', 'amanda', 'a123')
}