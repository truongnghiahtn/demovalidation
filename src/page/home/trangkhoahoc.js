import React, { Component } from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
import Card from "../../component/cardkhoahoc";

class trangkhoahoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Listcourse: [],
    };
  }

  componentDidMount() {
    this.props.getCategory();
    this.props.getListCourse();
    this.props.gettest();
  }
  componentWillReceiveProps(nextProps) {
    this.setState(
        {
          Listcourse:nextProps.listcourse
        },
        () => {
          console.log(this.state.Listcourse);
        }
      );
  }

  handletab = (x) => {
    let Listcourse = [...this.state.Listcourse];
    Listcourse = this.props.listcourse.filter((item) => {
      return item.danhMucKhoaHoc.maDanhMucKhoahoc == x;
    });
    if (x === "") {
      this.setState(
        {
          Listcourse: this.props.listcourse,
        },
        () => {
          console.log(this.state.Listcourse);
        }
      );
    } else {
      this.setState(
        {
          Listcourse,
        },
        () => {
          console.log(this.state.Listcourse);
        }
      );
    }
  };
  rendertab = () => {
    return this.props.category.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <a
            className="nav-link "
            onClick={() => {
              this.handletab(item.maDanhMuc);
            }}
            data-toggle="tab"
            href="#home"
          >
            {item.maDanhMuc}
          </a>
        </li>
      );
    });
  };
  renderhtml = () => {
    return this.state.Listcourse.map((item, index) => {
      return <Card key={index} course={item} />;
    });
  };
  render() {
    return (
      <div>
        <div className="my-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => {
                  this.handletab("");
                }}
                data-toggle="tab"
                href="#home"
              >
                Tất cả khóa học
              </a>
            </li>
            {this.rendertab()}
          </ul>
          <div className="tab-content">
            <div className="row">{this.renderhtml()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.KhoaHocReducer.danhmuckhoahoc,
    listcourse: state.KhoaHocReducer.listCourse,
  };
};
const maDispatchToProps = (dispatch) => {
  return {
    getCategory: () => {
      dispatch(action.actGetCategory());
    },
    getListCourse: () => {
      dispatch(action.actGetListCourse());
    },
    gettest: () => {
      dispatch(action.actGettest());
    },
  };
};
export default connect(mapStateToProps, maDispatchToProps)(trangkhoahoc);
