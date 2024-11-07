import "./App.css";

function Feature() {
  return (
    <div className='feature'>
      <img
        src=''
        alt=''
        className='feature-image'
      />
      <h3 className='feature-title'>Title</h3>
      <p className='feature-desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas
        iure, necessitatibus veritatis placeat optio temporibus ratione ipsam
        dolores facilis alias debitis, voluptatibus recusandae dolorem
        reprehenderit delectus. Nulla, sequi velit?
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
}

export default App;
