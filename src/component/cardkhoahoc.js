import React, { Component } from "react";
import {NavLink} from "react-router-dom"

export default class cardkhoahoc extends Component {
  render() {
    let { course } = this.props;
    return (
      <div className="col-3">
        <div className="card">
          <img className="card-img-top" src={course.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{course.biDanh}</h4>
            <p className="card-text">{course.moTa}</p>
            <NavLink button className="btn btn-info" to={`/trang-chi-tiet/${course.maKhoaHoc}`}> chi tiet</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
