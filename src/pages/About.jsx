function About() {
    return (
      <div className="about-container">
        <h1>Acerca de Naruto Universe</h1>
        
        <section className="about-section">
          <h2>El Proyecto</h2>
          <p>
            Naruto Universe es una aplicación web creada para los fans de la serie Naruto.
            Nuestro objetivo es proporcionar información detallada sobre personajes, 
            equipos y villanos del mundo de Naruto.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Tecnologías Utilizadas</h2>
          <ul>
            <li>React para el frontend</li>
            <li>React Router para la navegación</li>
            <li>CSS para los estilos</li>
            <li>API de Naruto para los datos</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>Fuente de Datos</h2>
          <p>
            Los datos de esta aplicación son obtenidos de una API pública de Naruto.
            Agradecemos a los creadores de la API por proporcionar esta valiosa información.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contacto</h2>
          <p>
            Si tienes alguna sugerencia o encuentras algún error, no dudes en contactarnos:
            <br />
            <a href="mailto:info@narutouniverse.com">info@narutouniverse.com</a>
          </p>
        </section>
      </div>
    );
  }
  
  export default About;