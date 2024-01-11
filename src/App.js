
  import './App.css';
  import './Media.css';
  import './Travel.css';
  import './Astrolus.css';
  import './Registration.css';
  import './Signup.css';
  import Signup from './components/Signup';
  import Travel from './pages/Travel';
  import Astrolus from './components/Astrolus';
  import Backpage from './components/Backpage';
  import Registration from './components/Registration'; 


function App() {
  return (
    <div>
           <Registration />    
            <Backpage />  
           <Astrolus />
          <Travel />    
          <Signup />   
       
    </div> 
  );
}

export default App;
