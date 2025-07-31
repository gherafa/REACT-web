import style from "./ComponentStyles";

const JsSkillsContent = () => (
  <div style={style.contentList}>
    <header style={style.headerStyle}>Javascript</header>
    <ul>
      <li>
        Able to design and implement both a monolithic and modular web application, using React and mobile application using React Native.
      </li>
      <li>
        Proficient in developing RESTful APIs with Node.js and GraphQL, Also experienced in using Apollo Client to fetch, cache, and manage application data.
      </li>
      <li>
       Understand and able to implement the React Redux library.
      </li>
      <li>
        Able to implement lifecycle method (state) when creating a class component, and using Hooks when creating a functional component.
      </li>
      <li>
        Experienced in setting and implementing code quality tools to enforce good coding standards using Eslint and SonarLint. Also, I have experience in implementing a static type checker for code reliability using Flow Type.
      </li>
      <li>
        Knowledge on using cron to schedule recurring task at defined intervals.
      </li>
    </ul>
  </div>
);

export default JsSkillsContent;