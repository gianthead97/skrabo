export class User {
    // koristicemo javne prom da bismo
    // im lakse pristupali
    constructor(
        public name: string,
        public points: number,
        public lastMessage: string
    ) {

    }
}
