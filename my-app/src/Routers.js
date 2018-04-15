import React,{Component} from "react";
import {Route,Link,Switch,Redirect,BrowserRouter as Router} from "react-router-dom";
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
<App>
  <Link to={"/bb"}>啦啦啦</Link>
 <Switch> 
<Route path={"/aa"}  component={App}/>
<Route path={"/bb"}  component={LoadingPage}/>
{/* <Redirect to="/"/> */}
</Switch> 

</App>

</ConnectedRouter>
</Provider>
      )
    }

  }
// )


