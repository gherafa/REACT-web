import "./AboutPage.css";

export default function AboutPage({onHover}) {
  return (
    <div className={`about-container ${onHover ? 'blur' : ''}`}>
      <h1 className="about-title">About This App</h1>
      <p className="about-intro">
        This web application is designed to provide a seamless and modern
        look to present about my backgrounds and experiences. The front-end is built with 
        <span className="highlight react"> React</span>, 
        ensuring fast and interactive user interfaces, while the back-end runs on 
        <span className="highlight java"> Java</span> with <span className="highlight java"> Spring-boot</span>, delivering powerful and
        reliable server-side logic.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h2 className="card-title react">Frontend with React</h2>
          <p style={{textAlign: 'justify'}}>
            The UI is built with JavaScript and React, making it dynamic, component-based, and fully responsive across
           devices. React, powered by JavaScript, enables fast rendering, smooth user interactions, and efficient state
           management. Together, they provide a flexible foundation for building modern, interactive web applications.
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title java">Backend with Java (Spring-Boot)</h2>
          <p style={{textAlign: 'justify'}}>
            The server side is powered by Java and Spring Boot,
            providing high performance, scalability,
            and enterprise-grade security for data handling.
            Spring Boot simplifies development with production-ready configurations,
            seamless database integration, and support for microservices. Together,
            they ensure the backend is fast, reliable, and maintainable for both small
            applications and enterprise systems.
          </p>
        </div>
      </div>
      <h1 className="key-areas-title">What you missed</h1>
      <div className="key-areas">
        <div className="key-areas-single">
          <ul style={{textAlign: 'justify'}}>
            <li>
              In the Past-projects sections, I created a map using Folium library from Python. It is an interactive maps and geospatial visualizations 
              of highlighted West-Java Province that contains many informations, from routes to potential disaster risk.
            </li>
            <li>
              This application uses H2 for lightweight development and testing, and PostgreSQL in production for scalability, reliability,
              and advanced data handling. Ensuring smooth development and stable performance.
            </li>
            <li>
              The Transfer Simuation page demonstrates the seamless integration of React on the frontend and Spring Boot on the backend through a
              simple money transfer simulation between two users. React handles the interactive UI,
              while Spring Boot processes the transaction logic, updates balances, and data handling. This simulation highlights a
              responsive and reliable full-stack feature.
            </li>
          </ul>
        </div>
      </div>
      <div className="key-areas">
        <div className="key-areas-single">
          <h2 className="card-title react">References</h2>
          <ul style={{textAlign: 'justify'}}>
            <li><a href="https://react.dev/" target="_blank">https://react.dev</a></li>
            <li><a href="https://www.baeldung.com/" target="_blank">https://www.baeldung.com</a></li>
            <li><a href="https://www.pexels.com/" target="_blank">https://www.pexels.com</a></li>
            <li><a href="https://icons8.com/" target="_blank">https://icons8.com</a></li>
            <li><a href="https://www.southampton.ac.uk/relief-ops/index.page" target="_blank">https://www.southampton.ac.uk/relief-ops</a></li>
          </ul>
        </div>
      </div>
      <div className="about-footer">
        <p>
          Built with love and hope 😃❤️ - Gheo
        </p>
      </div>
    </div>
  );
}
