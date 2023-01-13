import React,{useState} from "react";
import List from "./component/List"
import Data from "./component/Data"
function App() {
  const [people,setPeople]=useState(Data)

const  handleClick = () => {
console.log('hi');
}
  return (
    <main>
      <section className='container'>
      
         
<button onClick={handleClick}>
<h3>{people.length}birthday today</h3>
<List people={people}/></button>
<button>click</button>
 

 
  

        
         
    
      </section>
    </main>
  );
}

export default App;
