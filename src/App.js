import {Header} from "./components/header";
import { Main } from "./components/main";
import { Card } from "./components/card";
import {Footer} from "./components/footer";

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
