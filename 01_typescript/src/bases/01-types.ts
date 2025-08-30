export let name = 'Eduardo';
export const age : number = 2;
export const isValid: boolean = true;
// console.log(name);
name = 'Fernando';

export const templateString = ` Esto es un string
multilinea 
 que puede tener
 "comillas dobles" y 'comillas simples'
 y se pueden interpolar variables como ${name}
 epresiones como ${1 + 1}
 numeros como ${age}
 booleanos como ${isValid}
 `;

console.log(templateString);