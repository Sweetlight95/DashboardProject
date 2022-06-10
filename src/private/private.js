// import React, {useState} from 'react'
// import {MdOutlineUnfoldMore} from 'react-icons/md'
// import './recentuser.css'
// import {GrCheckbox} from "react-icons/gr"

// const RecentUser = () => {
//   const data = [
//     {
//       id: "",
//       title: "",
//       name: "love",
//       id: "",
//       phone: "09031879977",
     
//     },
    
      
//   ];

//   return (
//     <div>
     
//         <div >
//         <div className="uss">
//           <ul className="usercontent">
//             <li className="id"><GrCheckbox/>ID<MdOutlineUnfoldMore/></li>
//             <li className="name">TITLE<MdOutlineUnfoldMore /></li>
//             <li className="address">NAME <MdOutlineUnfoldMore /></li>
//             <li className="phone">ID<MdOutlineUnfoldMore/></li>
//             <li className="role">PHONE <MdOutlineUnfoldMore/></li>
           
//           </ul>
//         </div>
//         {data.map((user, index) => (
//           <div >
//             <ul className="userhead">
//               <li className="user14"><GrCheckbox/>{user.id}</li>
//               <li className="user8">{user.title}</li>
//               <li className="user9">{user.name}</li>
//               <li className="user9">{user.id}</li>
//               <li className="user10">{user.phone}</li>
                                 
             
//             </ul>
//           </div>
//         ))}
//         <div style={{ background: "#FFFFFF", boxShadow: "0px 0px 7px 3px rgba(40, 40, 40, 0.03)", borderRadius: "4px"}}>

//         </div>
//     </div>
    
//     </div>
//   )
// }

// export default RecentUser//   Axios.get(userPost, config).then((response) => {
  //     console.log(response.data, "");
  //   });
    //   };
     // axios.get(userPost, config).then((response) => {
    //   console.log(response.data.total, "");
    //   setUser(response.data.total)
    //   setPost(response.data.total)
    //   setComment(response.data.total)
    //   setTag(response.data.total)
    // });