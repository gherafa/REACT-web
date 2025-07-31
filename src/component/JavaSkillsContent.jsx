import style from "./ComponentStyles";

const JavaSkillsContent = () => (
  <div style={style.contentList}>
    <header style={style.headerStyle}>Java</header>
    <ul>
      <li>
        Able to write a clean and efficient object-oriented programming code by implementing refactoring methods.
      </li>
      <li>
        Experienced in implementing several design pattern to enhance the code such as observer, factory method, and builder pattern.
      </li>
      <li>
       Experienced in implementing TDD using Java testing libraries such as Junit, Mockito, and SpringTest.
      </li>
      <li>
        Able to create RESTful API (using Spring Boot) with database system and implement JWT authentication.
      </li>
    </ul>
  </div>
);

export default JavaSkillsContent;