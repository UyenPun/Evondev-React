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
    <div className='youtube-list'>
      {/* children component */}
      <YoutubeItem
        image='https://images.unsplash.com/photo-1730216827021-bc1dfa3d9c5b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        avatar='https://images.unsplash.com/photo-1670282301598-14f0f14e6e98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Learning React cơ bản'
        author='Pun'></YoutubeItem>
      <YoutubeItem
        image='https://plus.unsplash.com/premium_photo-1697730396686-c91663f86006?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        avatar='https://images.unsplash.com/photo-1665607333445-f35487df13bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
        title='Learning React cơ bản'
        author='Pun'></YoutubeItem>
      <YoutubeItem
        image='https://plus.unsplash.com/premium_photo-1661962564466-2fc5a2b5fba8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        avatar='https://images.unsplash.com/photo-1681372803614-6e83b3606cd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
        title='Learning React cơ bản'
        author='Pun'></YoutubeItem>
      <YoutubeItem
        image='https://plus.unsplash.com/premium_photo-1723921309309-4d19183297c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        avatar='https://images.unsplash.com/photo-1670283401314-d75e418ce688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8'
        title='Learning React cơ bản'
        author='Pun'></YoutubeItem>
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
