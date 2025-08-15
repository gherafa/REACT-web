const BeSummary = () => (
 <>
    <div className="card-column-3-section box-shadow">
      <header className="header-top custom-secondary">Back End Features</header>
      <p className="adjust-center font-description">
        The microservices backend is built to communicate with a Digital Banking Mobile Application. It is designed to simplify users’ banking activities, from savings to transfers. As a Software Engineer in the backend team, I have worked on features ranging from investments (bonds, mutual funds) to transactions (domestic and international transfers, QR payments, credit cards), as well as app optimizations. In the backend, we also perform performance testing to ensure that the APIs we build are fast and scalable. By implementing various scenarios for the estimated load, we are able to determine the optimal resources needed for the APIs to meet client-side demand efficiently.
      </p>
    </div>
    <div className="card-column-3-section box-shadow">
      <header className="header-top custom-secondary">The Tech Stacks</header>
      <p className="adjust-center font-description">
       The backend is a microservices-based application, mainly built using JavaScript frameworks like Node.js and Express.js. And of course, it is also integrated with GraphQL for efficient data querying, supported by a robust database layer, and designed to ensure scalability, maintainability, and high performance.
       The tech-stack used are:
        <ul>
          <li>NodeJs and ExpressJs</li>
          <li>Graphql</li>
          <li>PostgreSQL and MongoDB</li>
          <li>Redis</li>
          <li>Jest, Mocha, Sinon</li>
        </ul>
      </p>
    </div>
  </>
);

export default BeSummary;
