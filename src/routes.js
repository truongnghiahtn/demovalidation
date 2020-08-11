
import Home from "./page/home/home";
// import About from "./page/home/about";
import DSkhoahoc from "./page/home/trangkhoahoc"
import HomeAdmin from "./page/admin/dashboard";
import Trangchitiet from "./page/home/trangchitiet"
// import Themnguoidung from "./page/admin/Themnguoidung";
// import ChiTiet from "./page/chitietkhoahoc/chitetkhoahoc";
// import ThemKhoaHoc from "./page/admin/themkhoahoc";
// import DemoHOC from "./HOC/DemoHOC"
// import DemoHOOk from "./HOOK/demoHOOk"
// import Material from "./page/home/material"


const routesHome =[
    {
        path:"/",
        exact:true,
        component:Home
    },
    // {
    //     path:"/about",
    //     exact:false,
    //     component:About
    // },
    {
        path:"/danh-sach-khoa-hoc",
        exact:false,
        component:DSkhoahoc
    },
    {
        path:"/trang-chi-tiet/:id",
        exact:false,
        component:Trangchitiet
    },
    // {
    //     path:"/chi-tiet-khoa-hoc/:id",
    //     exact:false,
    //     component:ChiTiet
    // },
    // {
    //     path:"/demo-hoc",
    //     exact:false,
    //     component:DemoHOC
    // },
    // {
    //     path:"/demo-hook",
    //     exact:false,
    //     component:DemoHOOk
    // },
    // {
    //     path:"/material",
    //     exact:false,
    //     component:Material
    // },

]


export  {routesHome};


const routesAdmin =[
    {
        path:"/admin/dashboard",
        exact:false,
        component:HomeAdmin
    },
    // {
    //     path:"/admin/them-nguoi-dung",
    //     exact:false,
    //     component:Themnguoidung
    // },
    // {
    //     path:"/admin/them-khoa-hoc",
    //     exact:false,
    //     component:ThemKhoaHoc
    // },
]

export {routesAdmin} ;