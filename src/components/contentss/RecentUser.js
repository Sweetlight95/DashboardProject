import React, {useState} from 'react'
import {MdOutlineUnfoldMore} from 'react-icons/md'
import './recentuser.css'

const RecentUser = () => {
   
  return (
    <div>
     
        <div >
        <div className="uss">
          <ul className="usercontent">
            <li className="id">ID<MdOutlineUnfoldMore/></li>
            <li className="name">TITLE<MdOutlineUnfoldMore /></li>
            <li className="address">NAME <MdOutlineUnfoldMore /></li>
            <li className="phone">ID<MdOutlineUnfoldMore/></li>
            <li className="role">PHONE <MdOutlineUnfoldMore/></li>
           
          </ul>
        </div>
        <div style={{ background: "#FFFFFF", boxShadow: "0px 0px 7px 3px rgba(40, 40, 40, 0.03)", borderRadius: "4px"}}>

        </div>
    </div>
    
    </div>
  )
}

export default RecentUser