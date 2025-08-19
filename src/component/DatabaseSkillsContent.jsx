import style from "./ComponentStyles";

const DatabaseSkillsContent = () => (
  <div style={style.contentList}>
    <header style={style.headerStyle}>Data Transfer and Management</header>
    <ul>
      <li>
        Experienced in managing and implementing relational database using MySql, PostgreSql.
      </li>
      <li>
        Experienced in managing and implementing non-relational database using MongoDB.
      </li>
      <li>
        Knowledge in using in-memory database (caching) using Redis.
      </li>
      <li>
        Knowledge in implementing Elasticsearch for indexing and performing full-text searches.
      </li>
      <li>
        Experienced in handling both producing and consuming real-time data using Kafka.
      </li>
    </ul>
  </div>
);

export default DatabaseSkillsContent;