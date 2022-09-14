import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    const [search, setSearch]=useState('')
    const navigate = useNavigate();
    const searchbtn =()=>{
         if(search&&search!==''){
            navigate(`/query/${search}`)
        }
    }
    const onEnter = (e) =>{
        if (e.key === 'Enter') {
            navigate(`/query/${search}`)
          }
    }
   
    return(<>
        <header>
            <input type="text" placeholder="請輸入電影/戲劇名稱" onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={onEnter}/>
           <button onClick={searchbtn}>Search</button>
        </header>
    </>)
}
export default Header