document.getElementById('downloadButton').addEventListener('click', function () {
    const enlace = document.createElement('a');
    enlace.href = 'assets/pdf/Curriculum_Vitae-Saul_Mendoza.pdf'; // Ruta del archivo
    enlace.download = 'Curriculum_Vitae-Saul_Mendoza.pdf'; // Nombre del archivo sugerido
    document.body.appendChild(enlace); // Añade el enlace al cuerpo del documento
    enlace.click(); // Simula el clic para iniciar la descarga
    document.body.removeChild(enlace); // Elimina el enlace del DOM
});