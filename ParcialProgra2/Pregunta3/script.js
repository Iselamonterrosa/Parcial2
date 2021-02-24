< !DOCTYPE html >
    <html>
        <head>
            <style>
                table, th {
                    border: 1px solid black;
}
</style>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Inicio de sesion</title>
</head>
                    <body>

                        <h1>Inicio de sesion</h1>

                        <form id="frm1" action="/action_page.php">
                            <label for="name">Usuario*</label>
                            <input type="text" name="name" id="name" placeholder="Usuario">
                                <br />
                                <br />
                                <label for="contra">Contraseña*</label>
                                <input type="text" name="contra" id="contra" placeholder="contraseña">
                                    <br />
                                    <br />
                                    <label for="type">Cliente*</label>
                                    <input type="text" name="type" id="type" placeholder="Cliente o Administrador">
                                        <br />
                                        <br />
                                        <br />
                                        <input type="button" onclick="sendEmail()" value="Enviar">
                                            <br />
                                            <br />
                                            <br />
</form>
                                        <table id="myTable">
                                            <tr>
                                                <th>Usuario</th>
                                                <th>Contrasena</th>
                                                <th>Cliente</th>
                                                <th>Existe</th>
                                            </tr>
                                        </table>

                                        <script>
                                            function sendEmail() {
  var cell1html = document.getElementById("name");
  var cell2html = document.getElementById("contra");
  var cell3html = document.getElementById("type");
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = cell1html.value;
  cell2.innerHTML = cell2html.value;
  cell3.innerHTML = cell3html.value;
  cell4.innerHTML = "Nuevo";
}
</script>

</body>
</html>