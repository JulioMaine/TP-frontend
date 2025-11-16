// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}
console.log(calcularAreaRectangulo(5, 3));


// 2. Contar palabras en una cadena
function contarPalabras(texto) {
    return texto.trim().split(/\s+/).length;
}
console.log(contarPalabras("Humahuaca es un lugar copado"));


// 3. Contar vocales en una cadena
function contarVocales(cadena) {
    const vocales = "aeiou";
    let contador = 0;
    for (let letra of cadena) {
        if (vocales.includes(letra)) contador++;
    }
    return contador;
}
console.log(contarVocales("Trabajo practico")); 


// 4. Encontrar si un string es palíndromo
function esPalindromo(texto) {
    const limpio = texto.toLowerCase();
    return limpio === limpio.split("").reverse().join("");
}
console.log(esPalindromo("oso"));


// 5. Convertir edad de perro a años humanos
function edadCanina(edad) {
    const edadHumana = edad * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos`);
}
edadCanina(7);


// 6. Capitalizar la primera letra de cada palabra
function capitalizarPalabras(frase) {
    return frase
        .split("")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join("");
}
console.log(capitalizarPalabras("hola mundo desde javascript"));


// 7. Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    const serie = [0];
    if (n === 1) return serie;
    serie.push(1);

    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}
console.log(fibonacci(25));


// 8. Lista de Productos
const productos = [
    { id: 1, nombre: 'Notebook', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. forEach: Mostrar nombre y precio
productos.forEach(p => console.log(`${p.nombre} - $${p.precio}`));

// 2. map: Array de nombres
const nombresProductos = productos.map(p => p.nombre);
console.log(nombresProductos);

// 3. filter: electrónicos con stock > 20
const productosElectro = productos.filter(p => p.categoria == 'electrónica' && p.stock > 20);
console.log(productosElectro);

// 4. find: producto con id 3
const prodId3 = productos.find(p => p.id === 3);
console.log(prodId3);

// 5. reduce: valor total de inventario
const valorTotal = productos.reduce((acum, p) => acum + p.precio * p.stock, 0);
console.log(valorTotal);


// 9. Estudiantes y Calificaciones
const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 1. forEach: mostrar nombre y edad
estudiantes.forEach(e => console.log(`${e.nombre} - ${e.edad} años`));

// 2. map: nombre + promedio
const promedios = estudiantes.map(e => ({
    nombre: e.nombre,
    promedio: e.calificaciones.reduce((a, b) => a + b, 0) / e.calificaciones.length
}));
console.log(promedios);

// 3. filter: promedio > 7.5
const destacados = promedios.filter(e => e.promedio > 7.5);
console.log(destacados);

// 4. find: estudiante María
const maria = estudiantes.find(e => e.nombre === 'María');
console.log(maria);

// 5. reduce: edad promedio
const edadPromedio = estudiantes.reduce((acc, e) => acc + e.edad, 0) / estudiantes.length;
console.log(edadPromedio);


// 10. Películas
const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. forEach: título y año
peliculas.forEach(p => console.log(`${p.titulo} - ${p.año}`));

// 2. map: títulos mayúsculas
const titulosUpper = peliculas.map(p => p.titulo.toUpperCase());
console.log(titulosUpper);

// 3. filter: dramas con rating > 8.5
const dramasBuenRating = peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
console.log(dramasBuenRating);

// 4. find: película 2014
const peli2014 = peliculas.find(p => p.año === 2014);
console.log(peli2014);

// 5. reduce: duración total
const duracionTotal = peliculas.reduce((acc, p) => acc + p.duracion, 0);
console.log(duracionTotal);