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

export const users = {
    "jualiana@aol.com": new User('jualiana@aol.com', 'juliaa', 'ju123'),
    "amanda@aol.com": new User('amanda@aol.com', 'amanda', 'a123')
}