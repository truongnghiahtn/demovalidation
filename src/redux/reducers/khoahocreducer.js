import * as ActionType from "./../constants/actionType";
let initialState = {
  listCourse: [],
  course: {},
  danhmuckhoahoc: [],
  danhSachNguoiTao: []
};

const khoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_COUSRSE:
      state.listCourse = action.Listcourses;
      console.log(state.listCourse);
      return { ...state };
    case ActionType.GET_LIST_COUSRSE_DETAIL:
      state.course = action.data;
      return { ...state };
    case ActionType.GET_LIST_CATEGORY:
      state.danhmuckhoahoc = action.category;
      console.log(state.danhmuckhoahoc)
      return { ...state };
    case ActionType.LAYDS_GV:
      state.danhSachNguoiTao = action.DS_GV;
      return { ...state };
    default:
      return { ...state };
  }
};
export default khoaHocReducer;
