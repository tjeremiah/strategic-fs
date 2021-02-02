import React from "react";
import { BrowserRouter, as Router, Route, Link} from "react-router-dom";
import AllCreditors from "./AllCreditor";

const Routes = () => {
    return (
      <Router>
         <div>
             <nav>
                 <Link to="/creditors">
                     <h1>All Creditors Data</h1>
                 </Link>
             </nav>
             <main>
                <h1 id="main-title"> Welcome to Strategic FS </h1> 
             </main>
             
             <Route exact path="/creditors" component={AllCreditors} />
         </div>
      </Router>  
    )
}

export default Routes;