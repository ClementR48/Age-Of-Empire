import Acceuil from "./pages/Acceuil";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Civilization from "./pages/Civilization";
import Structure from "./pages/Structure";
import Units from "./pages/Units";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([])


  useEffect(() => {
    loadData();
  },[])
  
  const loadData = () => {

    
    console.log('ok');
  
    axios
    .get(
      'https://restcountries.eu/rest/v2/all?fields=name;population;flag;region;capital'
    )
      .then((response) => {
        console.log(response);
         setItems(response.data) ;
         
      })
      .catch((error) => {
        console.log(error);
        
      })
      .finally(() => {
        console.log('final');
        setIsLoaded(false)
      })
    
    }
  

  return (
    <BrowserRouter>
      <Switch> 
          <Route exact path="/" component={Acceuil} ><Acceuil loadData={loadData} isLoaded={isLoaded} items={items}/></Route>
          <Route exact path="/civilization" component={Civilization}><Civilization /></Route>
          <Route exact path="/structure" component={Structure}></Route>
          <Route exact path="/units" component={Units}></Route>
          <Redirect to="/" />
       </Switch>
    </BrowserRouter>
    
  );
}

export default App;
