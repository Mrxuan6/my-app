import React,{Component} from "react";
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import createHistory from "history/createBrowserHistory"
import store from "./store/index.js"

// export default Routers =()=>(
import App from './App';
import LoadingPage from './component/loadingPage/index.js';

const history = createHistory()
  export default class Routers extends Component {
    render(){
      return (
<Provider store={store}>
<ConnectedRouter history={history}>
<div>
 <Switch> 
  
<Route exact path="/" render={(props)=>(
<App {...props}>
 <Switch> 
<Route path="/loading"  component={LoadingPage}/> 
 </Switch> 

</App>
)}/>
</Switch> 

</div>

</ConnectedRouter>
 


</Provider>
      )
    }

  }
// )


