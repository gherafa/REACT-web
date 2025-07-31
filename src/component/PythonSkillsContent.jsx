import style from "./ComponentStyles";

const PythonSkillsContent = () => (
  <div style={style.contentList}>
    <header style={style.headerStyle}>Python</header>
    <ul>
      <li>
        Able to write both procedural and object-oriented code.
      </li>
      <li>
        Able to perform data processing, analysis, simulation, and visualization (including GIS data) using Pandas, Geopandas, Numpy, Folium, and Maptplotlib library.
      </li>
      <li>
        Able to develop a web application using the Flask library.
      </li>
      <li>
        Able to develop a desktop application to perform simulation and visualization using Tkinter and PyQt library
      </li>
      <li>Knowledge in machine learning and deep learning to perform regression and classification from Kaggle and UCI ML datasets using Scikit-learn, Keras, and Tensorflow library</li>
    </ul>
  </div>
);

export default PythonSkillsContent;