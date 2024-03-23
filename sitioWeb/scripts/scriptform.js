document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formTable = document.getElementById("form");
    var formSend = document.getElementById("formSend");
    var newRow = formSend.insertRow();

    var nombre = formTable.elements["nombre"].value;
    var apellido = formTable.elements["apellido"].value;
    var celular = formTable.elements["celular"].value;
    var email = formTable.elements["email"].value;
    var generoElement = formTable.elements["genero"];
    var genero = generoElement.options[generoElement.selectedIndex].text; 
    var contraseña = formTable.elements["password"].value;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = celular;
    cell4.innerHTML = email;
    cell5.innerHTML = genero;
    cell6.innerHTML = contraseña;

    formTable.reset();
});
