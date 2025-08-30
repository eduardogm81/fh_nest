export const pokemonIds = [1, 20, 30, 34, 66];

// pokemonIds.push('dasdasd');
// Trqnsoformar a numero
pokemonIds.push(+'1');

// export const pokemon = {
//     id: 1,
//     name: 'Bulbasaur',
//     age: 20,
//     isValid: true,
// }
// console.log(pokemonIds);
// console.log(pokemon.name);

interface Pokemon {
    id: number;
    name: string;
    // age?: number;
    age: number | undefined; // obligas a que age exista pero puede ser undefined
}

export const bulbasur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: undefined
}

export const charmander: Pokemon = {
    id: 2,
    name: "Charmander",
    age: undefined,
}

console.log(bulbasur.name);
console.log(charmander);
console.log(`id: ${charmander.id} y nombre ${charmander.name} ${charmander.age ?  "y edad " + charmander.age : ""}`);


export const pokemons: Pokemon[] = [];
pokemons.push(bulbasur, charmander);
console.log(pokemons);
