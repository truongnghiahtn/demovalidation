import React, { Component } from 'react'
import * as action from "../../redux/action/index"
import { connect } from 'react-redux'

 class trangchitiet extends Component{
componentDidMount(){
    this.props.detail(this.props.match.params.id)
}
componentWillReceiveProps(nextProps){
    console.log(nextProps.course)
}

    render(){
        return(
            <div>
                trang chi tiet
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        course:state.KhoaHocReducer.course
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        detail:(id)=>{
            dispatch(action.actDettailCourse(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (trangchitiet);