import * as Actiontype from "./../constants/actionType";
import Axios from "axios";
import swal from "sweetalert";
// import {callAPI} from "./../../untils/CallAPI"

export const actGetCategory = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    })
      .then((result) => {
        dispatch({
          type: Actiontype.GET_LIST_CATEGORY,
          category: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetListCourse = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((result) => {
        dispatch({
          type: Actiontype.GET_LIST_COUSRSE,
          Listcourses: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGettest = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://localhost:44358/api/lichlams1",
    })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actDettailCourse = (id) => {
  return (dispatch) => {
    Axios({
      type: "GET",
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    })
      .then((result) => {
        dispatch({
          type: Actiontype.GET_LIST_COUSRSE_DETAIL,
          data: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actdangky = (user) => {
  console.log(user);
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
    })
      .then((result) => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          }).then(()=>{
            window.location.reload();
        });
        }, 150);
      })
      .catch((err) => {
        console.log();
        setTimeout(() => {
            swal({
              title: "Error",
              text: err.response.data,
              icon: "error",
              timer:1500
            })
          }, 150);
      });
  };
};
// export const actGetListCourseAPI=()=>{

//     return dispatch=>{
//         Axios({
//             method:"GET",
//             url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
//         })
//         .then(result=>{
//             dispatch(actGetlistCourse(result.data))
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }
// };
// export const actDetailCourseAPI=(id)=>{

//     return dispatch=>{
//         Axios({
//             method:"GET",
//             url:`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
//         })
//         .then(result=>{
//             console.log(result.data)
//             dispatch({
//                 type:Actiontype.GET_LIST_COUSRSE_DETAIL,
//                 course:result.data
//             })
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }
// };
// export const actGetlistCourse =(listCourse)=>{
//     return {
//         type:Actiontype.GET_LIST_COUSRSE,
//         listCourse
//     };
// }

// export const actloginAdmin =(user,history) =>{
//     return dispatch=>{
//         Axios({
//             method:"POST",
//             url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
//             data:user
//         })
//         // callAPI("QuanLyNguoiDung/DangNhap","POST",user)
//         .then(result=>{
//             console.log(result,"ok")
//             if(result.data.maLoaiNguoiDung==="GV"){
//                 localStorage.setItem("userAdmin",JSON.stringify(result.data));
//                 // chuyen trang dashboar admin
//                  history.push("admin/dashboard")
//             }
//             else
//             {
//                 alert("ban dell dc dang nhap");
//             }
//         })
//         .catch(err=>{
//             console.log(err.response.data)
//         })
//     }
// };

// export const actGetCaTalogCourse =()=>{
//     return dispatch=>{
//         Axios({
//             method:"GET",
//             url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
//         })
//         .then(result=>{

//             dispatch({
//                 type:Actiontype.GET_CATA_COUSRSE,
//                 course:result.data
//             })
//         })
//         .catch(err=>{
//             console.log(err.response.data)
//         })
//     }
// }

// export const actLayDS_gv =()=>{
//     return dispatch=>{
//         Axios({
//             method:"GET",
//             url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
//         })
//         .then(result=>{

//             let ds_GV=result.data.filter(item=>{
//                 return item.maLoaiNguoiDung==="GV"
//             })
//             console.log(ds_GV)
//             dispatch({
//                 type:Actiontype.LAYDS_GV,
//                 DS_GV:ds_GV
//             })
//         })
//         .catch(err=>{
//             console.log(err.response.data)
//         })
//     }
// }

// export const actThemKhoaHoc=(khoahoc)=>{
//     const user =JSON.parse(localStorage.getItem("userAdmin"))
//     console.log(user.accessToken)

//     return dispatch=>{
//         Axios({
//             method:"POST",
//             url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
//             data:{...khoahoc,maNhom:"GP01",ngayTao:"19/10/2019"},
//             headers:{
//                 Authorization:`Bearer ${user.accessToken}`
//             }
//         })

//             .then(result=>{
//                 console.log(result)
//             })
//             .catch(err=>{
//                 console.log(err.response.data)
//             })
//     }
// }
