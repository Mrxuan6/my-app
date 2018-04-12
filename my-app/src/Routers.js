import React from "react";
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom";
const Routers =()=>(
<Router>
<Route path="/" component={(props)=>(
<App {...props}>
<Switch>
<Route path="/homeFeed"></Route>
</Switch>

</App>
)}/>
</Router>
)