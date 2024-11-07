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

// Parent component
function App() {
  return (
    <div>
      {/* children component */}

      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}

      <YoutubeItem
        image='https://images.unsplash.com/photo-1679233968660-058ea1a22225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
        avatar='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
        title='Learning React cơ bản'
        author='Pun'></YoutubeItem>
      <YoutubeItem
        image='https://plus.unsplash.com/premium_photo-1668359490418-b3ba8b4cb17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D'
        avatar='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
        title='Learning React nâng cao'
        author='Tran Uyen'></YoutubeItem>
    </div>
  );
}

function YoutubeItem(props) {
  console.log(props);

  return (
    <div>
      <div className='youtube-item'>
        <div className='youtube-image'>
          <img
            src={props.image}
            alt=''
          />
        </div>
        <div className='youtube-footer'>
          <img
            src={props.avatar}
            alt=''
            className='youtube-avatar'
          />
          <div className='youtube-infor'>
            <h3 className='youtube-title'>
              {props.title || "This is example of title"}
            </h3>
            <h4 className='youtube-author'>{props.author}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
