console.groupCollapsed("Ejercicios Strings")
console.group("Ejercicio 1")
/*     1. Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos. */
console.groupEnd()
let num1 = 5
let num2 = 4

console.log("la suma es=", num1 + num2)


console.group("Ejercicio 2")
/* 2. Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente.
Muestra en consola la longitud total de ambas cadenas. */
let simpleString1 = "Hola"
let simpleString2 = "Mundo"

console.log(simpleString1.length)
console.log(simpleString2.length)
console.groupEnd()

console.group("Ejercicio 3")
/* 3. Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 
con el valor "Ejercicios". */
let stringUsingString1 = String("JavaScript")

let stringUsingString2 = String("Ejercicios")
console.groupEnd()

console.group("Ejercicio 4")
/* 4. Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con 
el valor "Strings". */
let stringUsingNewString1 = new String("Concatenar")

let stringUsingNewString2 = new String("Strings")
console.groupEnd()

console.group("Ejercicio 5")
/* 5. Calcula e imprime en consola la posición del substring "la" en la variable simpleString1. */
console.log(simpleString1.match("la"))
console.log(simpleString1.search("la"))
console.groupEnd()

console.group("Ejercicio 6")
/* 6. Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola. */
console.log(simpleString2.match("ndo"))
console.log(simpleString2.search("ndo"))
console.groupEnd()

console.group("Ejercicio 7")
/* 7. Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola. */
console.log(simpleString1.concat(" ", simpleString2))
console.log(simpleString1.concat(" ").concat( simpleString2))
console.groupEnd()

console.group("Ejercicio 8")
/* 8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola. */
console.log(simpleString1 + " " + simpleString2)
console.groupEnd()

console.group("Ejercicio 9")
/* 9. Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola. */
console.log(`${simpleString1} ${simpleString2}`)
console.groupEnd()

console.group("Ejercicio 10")
/* 10. Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ".
Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola. */
let stringWithSpaces1 = " TrimStart"

let stringWithSpaces2 = "TrimEnd "
console.groupEnd()

console.group("Ejercicio 11")
/* 11. Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola. */
console.log(simpleString1.replace("o", "i"))
console.groupEnd()

console.group("Ejercicio 12")
/* 12. Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola. */
console.log(simpleString2.slice(0, 3))
console.groupEnd()

console.group("Ejercicio 13")
/* 13. Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola. */
console.log(simpleString2.substring(2))
console.groupEnd()

console.group("Ejercicio 14")
/* 14. Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola. */
console.log(simpleString1.repeat(2))
console.groupEnd()

console.group("Ejercicio 15")
/* 15. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola. */
let oracionEjemplo = "Esto es una oración de ejemplo"

console.log(oracionEjemplo.split(" "))
console.groupEnd()

console.group("Ejercicio 16")
/* 16. Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola. */
console.log(simpleString2.toUpperCase())
console.groupEnd()

console.group("Ejercicio 17")
/* 17. Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola. */
console.log(simpleString1.toLowerCase())
console.groupEnd()

console.group("Ejercicio 18")
/* 18. Declara una variable booleana y asígnale un valor booleano.Muestra en consola su tipo de dato utilizando el operador typeof (). */
let variavleBolean = true

console.log(typeof variavleBolean)
console.groupEnd()

console.group("Ejercicio 19")
/* 19. Declara una variable arreglo y asígnale un array con al menos tres elementos.Muestra en consola la longitud del array. */
let arreglo = [1, 2, 3]

console.log(arreglo.length)
console.groupEnd()

console.group("Ejercicio 20")
/* 20. Declara una variable objeto y asígnale un objeto con al menos tres propiedades.Muestra en consola una de las propiedades del objeto. */
let objeto = {
    nombre: "Marlon",
    apellido: "Peña",
    edad: 23
}

console.log(objeto.nombre)
console.groupEnd()

console.group("Ejercicio 21")
/* 21. Declara una variable nulo y asígnale el valor null.Muestra en consola su tipo de dato utilizando el operador typeof (). */
let nulo = null

console.log(typeof nulo)
console.groupEnd()

console.group("Ejercicio 22")
/* 22. Declara una variable indefinido y no le asignes ningún valor.Muestra en consola su tipo de dato utilizando el operador typeof (). */
let indefinido = undefined

console.log(typeof indefinido)
console.groupEnd()

console.group("Ejercicio 23")
/* 23. Declara una variable decimal y asígnale un número decimal.Muestra en consola su tipo de dato utilizando el operador typeof (). */
let decimal = 2.56

console.log(typeof decimal)
console.groupEnd()

console.group("Ejercicio 24")
/* 24. Declara una variable negativo y asígnale un número negativo.Muestra en consola su tipo de dato utilizando el operador typeof (). */
let negativo = -50

console.log(typeof negativo)
console.groupEnd()

console.group("Ejercicio 25")
/* 25. Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola. */
let cadena = "casa"

console.log(cadena.indexOf("a"))
console.groupEnd()

console.group("Ejercicio 26")
/* 26. Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola. */
console.log(stringUsingString1.includes("Script"))
console.groupEnd()

console.group("Ejercicio 27")
/* 27. Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 28")
/* 28. Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 29")
/* 29. Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 30")
/* 30. Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ".
Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola. */
let cadenaConEspacios = " Ejemplo con espacios "

console.log(cadenaConEspacios.trimStart())
console.log(cadenaConEspacios.trimEnd())
console.groupEnd()

console.group("Ejercicio 31")
/* 31. Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola. */
let cadenaReplace = "El cielo es azul"

console.log(cadenaReplace.replace("azul", "rojo"))
console.groupEnd()

console.group("Ejercicio 32")
/* 32. Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola. */
let cadenaSlice = "Programación"

console.log(cadenaSlice.slice(-4))
console.groupEnd()

console.group("Ejercicio 33")
/* 33. Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 34")
/* 34. Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 35")
/* 35. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 36")
/* 36. Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 37")
/* 37. Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 38")
/* 38. Declara una variable numero y asígnale un número.Muestra en consola su tipo de dato utilizando el operador typeof (). */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 39")
/* 39. Declara una variable booleana y asígnale un valor booleano.Muestra en consola su tipo de dato utilizando el operador typeof (). */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 40")
/* 40. Declara una variable arreglo y asígnale un array con al menos tres elementos.Muestra en consola la longitud del array. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 41")
/* 41. Declara una variable objeto y asígnale un objeto con al menos tres propiedades.Muestra en consola una de las propiedades del objeto. */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 42")
/* 42. Declara una variable nulo y asígnale el valor null.Muestra en consola su tipo de dato utilizando el operador typeof (). */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 43")
/* 43. Declara una variable indefinido y no le asignes ningún valor.Muestra en consola su tipo de dato utilizando el operador typeof (). */
// Ejercicio repetido
console.groupEnd()

console.group("Ejercicio 44")
/* 44. Declara una variable decimal y asígnale un número decimal.Muestra en consola su tipo de dato utilizando el operador typeof (). */
console.groupEnd()
console.groupEnd()