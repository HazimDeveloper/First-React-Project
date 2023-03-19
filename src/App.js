import React,{useState,useEffect,useRef} from 'react';
import './App.css';
import Profile from './components/profile';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
const LinkRef = useRef(null);

const goto = (ref) =>{
window.scrollTo({
  top:ref.offsetTop,
  left: 0,
  behaviour: 'smooth'
})
}

  const [getNavValue,setNavValue] = useState("Navbar");
const [count,setCount] = useState(0);
const [name,setName] = useState("Hakas");
  const ChangeNavValue = () => {
    setNavValue("Navigation Bar"); 
  }

  const tiadaNama = "Ali";
  useEffect(() => {
   
    if(count > 1) 
    setName(tiadaNama)
    else
    setName('Hakas')
  },[count]);

  const Contact = "Contact";

  const Btn = () => {
     alert("Hoorey Menjadi");
  }

  const Paragraf = () => {
    return(
    <div>
      <i>Ini Function paragraf</i>
    </div>
    )
  } 
  return (

    <div className="App">


      <header className="App-header">
      <div>
            <button type="button" onClick={() => goto(LinkRef.current)}>UseRef!!</button>
        </div>
   <Navbar  NavHeading={getNavValue} Contact={Contact} />
        <h1>Ini First Project React</h1>
    <div>
    </div>

   <p>{name}</p>
     <Profile name="Muhammad Hazim" work="Junior Web Developer"/>
      <MyButton alert={Btn} />
    <button onClick={() => setName("Hazim")}>Change Name</button>
    
    <p>{count}</p>

      <button onClick={() => setCount((prevNum) => prevNum + 1)}>
        +
      </button>
      <button onClick={() => setCount((prevNum) => prevNum - 1)}>
        -
      </button>


      <button onClick={ChangeNavValue}>Change Navigation Value</button>
      
      <Footer paragraf={Paragraf} />
      <a href='https://reactjs.org' ref={LinkRef}>Learn React</a>
      </header>
    </div> 
  
)};

export default App;
