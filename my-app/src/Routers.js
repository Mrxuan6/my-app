import React,{Component} from "react";
import {Provider} from "react-redux";
import {Route,Link,Switch,Redirect,BrowserRouter as Router} from "react-router-dom";
import {ConnectedRouter} from "react-router-redux";
import createHistory from "history/createBrowserHistory"
import store from "./store/index.js"
import Loadable from "react-loadable"
import MyLoadingComponent from './component/LoadingComponent/index.js';
// export default Routers =()=>(
import App from './App';
const AsyncLoadingPage= Loadable({
  loader: () => import('./component/loadingPage/index.js'),
  loading: MyLoadingComponent
});
const AsyncVideoPage= Loadable({
  loader: () => import('./containers/videoPage/index.js'),
  loading: MyLoadingComponent
});
// import LoadingPage from './component/loadingPage/index.js';

const AsyncListPage= Loadable({
  loader: () => import('./component/listPage/index.js'),
  loading: MyLoadingComponent
});
const AsyncRxjsPage= Loadable({
  loader: () => import('./component/rxjs/index.js'),
  loading: MyLoadingComponent
});
// import ListPage from './component/listPage/index.js';
const AsyncSetInHtml= Loadable({
  loader: () => import('./component/SetInHtml/index.js'),
  loading: MyLoadingComponent
});
// import SetInHtml from './component/SetInHtml/index.js';
const AsyncItem1= Loadable({
  loader: () => import('./component/items/index.js'),
  loading: MyLoadingComponent
});
// import Item1 from './component/items/index.js';

const history = createHistory()
  export default class Routers extends Component {
    render(){
      return (
<Provider store={store}>
<ConnectedRouter history={history}>
<App>
  {/* <Link to={"/bb"}>啦啦啦</Link> */}
  {/* <Link to={"/setInHtml"}>setInHtml</Link> */}
 <Switch> 
<Route path={"/aa"}  render={(props)=>(
<App>
  <Link to={`${props.match.path}/ff`}>666</Link>
<Route path={`${props.match.path}/ff`}  component={AsyncItem1}/>
</App>

)}/>
<Route path={"/bb"}  component={AsyncLoadingPage}/>
<Route path={"/video"}  component={AsyncVideoPage}/>
<Route path={"/rx"}  component={AsyncRxjsPage}/>

<Route path={"/setInHtml"}  component={AsyncSetInHtml}/>
<Route path={"/cc"}  component={AsyncListPage}/>
{/* <Redirect to="/"/> */}
</Switch> 

</App>

</ConnectedRouter>
</Provider>
      )
    }

  }
// )

 
