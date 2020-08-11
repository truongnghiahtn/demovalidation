import React, { Component } from "react";
import * as action from "../../redux/action/index"
import {connect} from "react-redux"
 class formDangKy extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      values: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "GP01",
        email: "",
      },
      err: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        email: "",
      },
      formValid: false,
      taiKhoanValid: false,
      matKhauValid: false,
      hoTenValid: false,
      soDTValid: false,
      emailValid: false,
    };
  }

  // lay du lieu tu input

  handleOnchange = (event) => {
    let {value, name} = event.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      }
    );
  };

  // validation

  handleErr = (event) => {
    let { name, value } = event.target;
    let message = value === "" ? name + "do not empty" : "";
    let {
      taiKhoanValid,
      matKhauValid,
      hoTenValid,
      soDTValid,
      emailValid,
    } = this.state;
    switch (name) {
      case "taiKhoan":
        taiKhoanValid = message !== "" ? false : true;
        if (value != "" && !value.match(/^[A-Z-a-z0-9_-]{1,25}$/i)) {
          taiKhoanValid = false;
          message = "tai khoan cua ban qua 25 ki tu";
        }
        if (value !== "" && !value.match(/^[A-Z-a-z0-9_-]{1,40}$/i)) {
          taiKhoanValid = false;
          message = "The account has special characters!";
        }
        break;
      case "matKhau":
        matKhauValid = message !== "" ? false : true;
        if (value != "" && (value.length <= 8 || value.length >= 32)) {
          matKhauValid = false;
          message = "do dai tai khoan ko dung";
        }
        break;
      case "hoTen":
        hoTenValid = message !== "" ? false : true;
        if (value !== "" && !value.match(/^[a-z-A-Z -]{1,25}$/i)) {
          hoTenValid = false;
          message = "Username cannot exceed 25 characters !";
        }
        if (value !== "" && !value.match(/^[a-z-A-Z -]{2,40}$/i)) {
          hoTenValid = false;
          message = "Username has special characters !";
        }
        break;

        case "soDT":

            soDTValid=message !==""?false:true;
            if(value!==""&& !value.match(/^[0-9]{10,11}$/i))
            {
                soDTValid=false;
                message="so dien thoai cua ban ko dung"
            }
            break;
        case "email":
            emailValid=message!==""?false:true;
            break
      default:
        break;
    }

    this.setState({
        err:{...this.state.err,[name]:message},
        taiKhoanValid,
        matKhauValid,
        hoTenValid,
        soDTValid,
        emailValid,
    },()=>{this.FormValid()})
  };



//   FormValid

FormValid=()=>{
    let {
        taiKhoanValid,
        matKhauValid,
        hoTenValid,
        soDTValid,
        emailValid,
      } = this.state;

    let Valid=taiKhoanValid&&matKhauValid&&hoTenValid&&soDTValid&&emailValid;
    this.setState({
        formValid:Valid
    },()=>{console.log(this.state)})
}

// dang nhap

onSubmit=(event)=>{
    event.preventDefault();
    this.props.submit(this.state.values)
}

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>taiKhoan</label>
                    <input
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      onChange={this.handleOnchange}
                      onBlur={this.handleErr}
                      onKeyUp={this.handleErr}
                    />
                    {this.state.err.taiKhoan==""?"":this.state.err.taiKhoan}
                  </div>
                  <div className="form-group">
                    <label>matKhau</label>
                    <input
                      type="text"
                      className="form-control"
                      name="matKhau"
                      onChange={this.handleOnchange}
                      onBlur={this.handleErr}
                      onKeyUp={this.handleErr}
                    />
                    {this.state.err.matKhau==""?"":this.state.err.matKhau}
                  </div>
                  <div className="form-group">
                    <label>hoTen</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hoTen"
                      onChange={this.handleOnchange}
                      onBlur={this.handleErr}
                      onKeyUp={this.handleErr}
                    />
                    {this.state.err.hoTen==""?"":this.state.err.hoTen}
                  </div>
                  <div className="form-group">
                    <label>soDT</label>
                    <input
                      type="text"
                      className="form-control"
                      name="soDT"
                      onChange={this.handleOnchange}
                      onBlur={this.handleErr}
                      onKeyUp={this.handleErr}
                    />
                    {this.state.err.soDT==""?"":this.state.err.soDT}
                  </div>
                  <div className="form-group">
                    <label>email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={this.handleOnchange}
                      onBlur={this.handleErr}
                      onKeyUp={this.handleErr}
                    />
                    {this.state.err.email==""?"":this.state.err.email}
                  </div>

                  <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>{
    return{
        submit:user=>{
            dispatch(action.actdangky(user))
        }
    }
}
export default connect(null,mapDispatchToProps) (formDangKy);

