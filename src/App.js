import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./components/navigation/main/Main";
import Contacts from "./components/navigation/сontacts/Contacts";
import Nav from "./components/navigation/Nav";
import Post from "./components/navigation/post/DataPost";
import Photo from "./components/navigation/photo/DataPhoto";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/Browser_Router/" element={<Main />}/>
            <Route path="/Browser_Router/Post" element={<Post />}/>
            <Route path="/Browser_Router/Photo" element={<Photo />}/>
            <Route path="/Browser_Router/Contacts" element={<Contacts />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
