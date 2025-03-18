// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// creando función para agregar lista de amigos

let amigos = [];
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let lista = document.getElementById("listaAmigos");
    if (!input) {
        alert("No se encontró el elemento de entrada.");
        return;
    }
    if (!lista) {
        alert("No se encontró la lista de amigos.");
        return;
    }
    let nombre = input.value.trim();
    // Validando los nombres
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. Intenta con otro.");
        return;
    }
    
    amigos.push(nombre);
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
     // Actualizar la lista en el HTML
     actualizarLista();
     // Limpiar el campo de entrada
     input.value = "";
 }
 function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizar
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    amigos.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// creando función sorteo aleatorio 
function sortearAmigo() {
    let amigos = [];
    document.querySelectorAll("#listaAmigos li").forEach(li => amigos.push(li.textContent));

    if (amigos.length < 2) {
        alert("Se necesitan al menos dos nombres.");
        return;
    }

    // Sortear un nombre aleatorio
    let elegido = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar resultado en la lista HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    let item = document.createElement("li");
    item.textContent = `Tu amigo secreto es: ${elegido}`;
    resultado.appendChild(item);
}
