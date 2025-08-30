/*export class Pokemon {
    public id: number;
    public name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}*/

import axios from "axios";
import type {Move, PokeapiResponse} from "../interfaces/pokeapi-response.interface.ts";

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name);
        return data.moves;
        // return resp;
    }
}

export const charmander = new Pokemon(4, 'Charmander');
console.log(charmander);
console.log(charmander.imageUrl);
charmander.scream();
charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();