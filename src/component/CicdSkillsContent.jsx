import style from "./ComponentStyles";

const CicdSkillsContent = () => (
  <div style={style.contentList}>
    <header style={style.headerStyle}>Pipeline and version control</header>
    <ul>
      <li>
        Experienced in using version control tools (Bitbucket, Gitlab, and Github) including review, branching, merging, and resolving conflicts.
      </li>
      <li>
        Knowledge in using automated pipelines to build, test, deploy, and monitor Applications that run in cloud containers.
      </li>
      <li>
        Knowledge in using Docker to run Image and contenairization.
      </li>
      <li>
        Hands on experienced in using OCP Redhat for deploy, manage, and replication of microservices.
      </li>
    </ul>
  </div>
);

export default CicdSkillsContent;