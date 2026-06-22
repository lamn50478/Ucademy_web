import { Manrope ,Roboto} from "next/font/google";
import localFont from "next/font/local"
const manrope=Manrope({
    subsets:["latin"],
    variable:"--font-manrope"
});
const roboto=Roboto({
    subsets:["latin"],
    weight:["500","100"],
    variable:"--font-roboto"
});
// const dmsans=localFont({
//    src:[
//     {
//         path:"../fonts/dm-sans-webfont/DMSans-Regular.woff",
//         weight:"400"
//     },
//     {
//         path:"../fonts/dm-sans-webfont/DMSans-Bold.woff",
//         weight:"600"
//     },
//       {
//         path:"../fonts/dm-sans-webfont/DMSans-Italic.woff",
//         weight:"300",
//         style:"italic"
//     }
//    ],
//     display:"swap"
// })
export {
    manrope,
    roboto,
    // dmsans
}