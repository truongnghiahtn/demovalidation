import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./template/hometemplate";
import AdminTemplate from "./template/AdminTemplate";
import PageNotFound from "./component/pagenotfound";
import Admin from "./page/admin/admin";

import {routesHome} from "./routes";
import {routesAdmin} from "./routes"
// const showMenus =(routes)=>{
//   if(routes && routes.length >0)
//   {
//     return routes.map((item,index) =>{
//       return (   <Route key={index} path={item.path} exact={item.exact} component={item.component} />)
//     })
//   }
// }
const showMenusHome =(routes)=>{
  if(routes && routes.length >0)
  {
    return routes.map((item,index) =>{
      return (   <HomeTemplate key={index} path={item.path} exact={item.exact} Component={item.component} />)
    })
  }
}
const showMenusAdmin =(routes)=>{
  if(routes && routes.length >0)
  {
    return routes.map((item,index) =>{
      return (   <AdminTemplate  key={index} path={item.path} exact={item.exact} Component={item.component} />)
    })
  }
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route path="/" exact component={Home} />
          <Route path="/danh-sach-khoa-hoc" component={DSkhoahoc} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} /> */}
          {showMenusHome(routesHome)}
          {showMenusAdmin(routesAdmin)}
          <Route path="/admin" exact={true} component={Admin  }/>
          <Route path="" exact={false} component={PageNotFound}/>
        </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;

