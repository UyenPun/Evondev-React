import "./App.css";
import { YoutubeData } from "./YoutubeData";

// Parent component
function App() {
  return (
    <div className='youtube-list'>
      {/* item: 1 doi tuong cua YoutubeData; index: start: 0 */}
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}></YoutubeItem>
      ))}
    </div>
  );
}

function YoutubeItem(props) {
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
