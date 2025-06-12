const languageSwitch = document.getElementById('color_mode');

const translations = {
  ES: {
    start: 'Inicio',
    about: 'Sobre Mí',
    projects: 'Proyectos',
    cta: 'Contacto',
    user: 'Disponible para trabajo',
    title: 'Transformando ideas en soluciones tecnológicas innovadoras',
    download: 'Descargar',
    aboutme: 'Estudiante de la carrera de Ingeniería de Software con experiencia laboral en el diseño y desarrollo web. Me caracterizo por mi responsabilidad, compromiso y mejora continua.',
    tech: 'Tecnologías que utilizo',
    pethealth: 'PetHealth: Desarrollo de una simulación de un dispositivo IoT para mascotas, capaz de recopilar signos vitales de las mascotas y mostrar los datos recopilados a los usuarios a través de una aplicación web.',
    twinguard: 'TwinGuard: Plataforma avanzada que garantiza la seguridad escolar mediante el monitoreo en tiempo real, simulacros de evacuación y alertas automáticas. Con tecnología de gemelos digitales.',
    mibodega: 'MiBodega: Una app web para bodegas que permite registrar y gestionar compradores, facilitando la adquisición de productos al por mayor con pagos a plazos.',
    taskify: 'Taskify: Aplicación Web en desarrollo para organizar tareas, notas y horarios de manera fácil y rápida.',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    send: 'Enviar'
  },
  EN: {
    start: 'Home',
    about: 'About Me',
    projects: 'Projects',
    cta: 'Contact',
    user: 'Available for work',
    title: 'Transforming ideas into innovative technological solutions',
    download: 'Download',
    aboutme: 'Software Engineering student with work experience in web design and development. Im known for my responsibility, commitment, and continuous improvement.',
    tech: 'Technologies I use',
    pethealth: 'PetHealth: Development of a simulation of an IoT device for pets, capable of collecting vital signs of pets and showing the collected data to users through a web application.',
    twinguard: 'TwinGuard: Advanced platform that ensures school safety through real-time monitoring, evacuation drills and automatic alerts. With digital twins technology.',
    mibodega: 'MiBodega: A web app for markets that allows you to register and manage buyers, facilitating the acquisition of products wholesale with installment payments.',
    taskify: 'Taskify: Web application in development to organize tasks, notes and schedules easily and quickly.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send'
  },
};

function updateLanguage(lang) {
  // select all elements with data-lang attribute
  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-lang');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key]; // update text content
    }
  });
}

languageSwitch.addEventListener('change', (event) => {
  const selectedLang = event.target.checked ? 'EN' : 'ES';
  console.log(`Language selected: ${selectedLang}`);
  updateLanguage(selectedLang);
});

updateLanguage('ES');