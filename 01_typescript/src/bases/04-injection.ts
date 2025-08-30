// import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import {type HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter} from "../api/pokeApi.adapter.ts";
import type {PokeapiResponse} from "../interfaces/pokeapi-response.interface.ts";

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter,

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves() { // : Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data);
        console.log( data.moves );

        return data.moves;
    }

}

// La idea es que se pueda cambiar la implementacion del HttpAdapter
//const pokeApiFetch = new PokeApiFetchAdapter();
const pokeApiAxios = new PokeApiAdapter();

export const charmander = new Pokemon( 4, 'Charmander' , pokeApiAxios);

charmander.getMoves();