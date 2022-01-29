import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import InsertBody from './Components/InsertBody/InsertBody';
import InBuilt from './Components/InBuilt/InBuilt';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          {/* <Body /> */}
          <Route path="/insert" element={<InsertBody />} />
          <Route path="/inbuilt" element={<InBuilt />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
