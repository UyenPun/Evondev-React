import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";

// Parent component
function App() {
  return (
    <div>
      <YoutubeList>
        {/* children: html, component, text, variable */}
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          eius hic deserunt ex perspiciatis placeat nulla dolore. Illum sunt
          doloribus molestiae repudiandae aspernatur! Culpa dolor reiciendis
          necessitatibus distinctio, illo quisquam.
        </h2>
      </YoutubeList>
    </div>
  );
}

export default App;
