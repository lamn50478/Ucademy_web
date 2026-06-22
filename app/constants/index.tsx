import {IconComment, IconCourse, IconExplore,IconMember,IconOrder,IconPlay, IconStudy} from "../components/icons/index";
import { TMenuItem } from "../types";


export const MenuItems:TMenuItem[]=[
    {
        url:"/",
        title:"Khám phá",
        icon: <IconPlay className="size-5"/>
    },
     {
        url:"/study",
        title:"Khu vực học tập ",
        icon: <IconStudy className="size-5"/>
    }
    ,
     {
        url:"/manage/course",
        title:"Quản lý khóa học  ",
        icon: <IconCourse className="size-5"/>
    }
    ,
     {
        url:"/manage/member",
        title:"Quản lý thành viên",
        icon: <IconMember className="size-5"/>
    }
    ,
     {
        url:"/manage/order",
        title:"Quản lý đơn hàng",
        icon: <IconOrder className="size-5"/>
    }
    ,
     {
        url:"/manage/comment",
        title:"Quản lý bình luận ",
        icon: <IconComment className="size-5"/>
    }
];