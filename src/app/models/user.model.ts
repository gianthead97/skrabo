const names = require('../../assets/names.json');
const colors = require('../../assets/colors.json');

export class UserData {
    // koristicemo javne prom da bismo
    // im lakse pristupali

    constructor(
        public name: string,
        public points: number,
        public message: string,
        public color: string
    ) {
        const indexColor: number = Math.floor(Math.random() * colors.length);
        this.color = colors[indexColor];
        if (this.name === '') {
            const indexName: number = Math.floor(Math.random() * names.length);
            this.name = names[indexName];
        }
    }
}
