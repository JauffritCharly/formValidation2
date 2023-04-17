export class User {
    constructor(
        public username : string | null,
        public email : string | null,
        public mdp : string | null,
        public rue : string | null,
        public codePostal : string | null,
        public ville : string | null,
    ){}
}