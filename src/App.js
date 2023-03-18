import React,{useState} from 'react';
import './App.css';
import Profile from './components/profile';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {

  const [getNavValue,setNavValue] = useState("");

  const ChangeNavValue = () => {
    setNavValue("Navigation Bar"); 
  }

  
  const Contact = "Contact";

  const Btn = () => {
     alert("Hoorey Menjadi");
  }

  const Paragraf = () => {
    return(
    <div>
      <i>Ini Function paragraf</i>
      <marquee>Fuyooo</marquee>
    </div>
    )
  } 
  return (
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="/about" element={<About />}> </Route>
  //     <Route path="*" element={<NotFound />}>  </Route>
  //     </Routes>
  // </Router>

    <div className="App">

      <header className="App-header">
   <Navbar  NavHeading={getNavValue} Contact={Contact} />
        <h1>Ini First Project React</h1>
   
     <Profile name="Muhammad Hazim" work="Junior Web Developer"/>
      <MyButton alert={Btn} />
      <button onClick={ChangeNavValue}>Change Navigation Value</button>
      
      <Footer paragraf={Paragraf} />
      </header>
    </div> 
  
)};

export default App;
