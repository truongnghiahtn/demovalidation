import React,{Fragment} from 'react'
import Navbar from "../component/navBar"
import {Route} from "react-router-dom"
const Homelayout =props=>{
    return(
        <Fragment>
        <Navbar/>
        {props.children}
        </Fragment>)
};

export default function hometemplate({Component,...props}) {

    return (
        <Route {...props} render={propsComponent=>(
            <Homelayout>
                <Component {...propsComponent}/>
            </Homelayout>
        )
        }/>
    )
};

