const groupAnagrams = (words) => {
  const map = new Map(); // se crea un hashmap
  for (const word of words) { // se itera
    // se sortea la palabra 
     const sortedWord = word.split('').sort().join("") // retorna un string sorteado
    // se checkea que la palabra no exista
    if(!map.has(word)) {
      map.set(sortedWord, []) // si no esta, se guarda la palabra sorteada en el hashmap como su clave y un array vacio como su valor
    }
    map.get(sortedWord).push(word) // aca se trae la clave y se agrega a ese array la nueva palabra
  }
  return Array.from(map.values()) // finalmente se retorna solamente el value de cada clave
}

const caca = ["eat", "tea", "silent", "listen"]
console.log(groupAnagrams(caca))
