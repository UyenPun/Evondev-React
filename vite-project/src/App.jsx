import "./App.css";
import { YoutubeData } from "./YoutubeData";

// Parent component
function App() {
  return (
    <div className='youtube-list'>
      {/* item: 1 doi tuong cua YoutubeData; index: start: 0 */}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";

        {
          /* Cach 2: */
          {
            /* const newClass = index === 1 ? "abc" : ""; */
          }
        }

        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            // Neu index = 1 thi co class abc
            className={newClass}></YoutubeItem>
        );
      })}
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div>
      <div className={`youtube-item ${props.className}`}>
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
