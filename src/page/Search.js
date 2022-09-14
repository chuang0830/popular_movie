import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {searchItem, removeSearch} from '../redux/action/search'
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../component/MovieItem";
import PersonItem from "../component/PersonItem";
import Loading from "../component/Loading";

const Search =()=>{
  const cateshow = ['movie','tv']
  const cateperson = ['person']
  const [ cate, setCate ] = useState(cateperson)
  const { searchInput } = useParams();
    const dispatch = useDispatch();
    const searchItems = useSelector(state=>state.searchItem.items)
    useEffect(() => {
        if (searchInput && searchInput!==''){dispatch(searchItem(searchInput))}
        return () => {
          dispatch(removeSearch())  
        };
      }, [searchInput]);
    return(<>
            <div className="search">
                <div className="category">
                  <span className={cate.includes('tv')?'active':''}
                  onClick={()=>setCate(cateshow)}
                  >片名</span>
                  <span className={cate.includes('person')?'active':''}
                   onClick={()=>setCate(cateperson)}
                  >演員</span>
                </div>
                <div className="searchList_wrap" style={{flexWrap:'wrap'}}>
                  {searchItems&&searchItems.length?searchItems.map(value=>{
                    return cate.includes('person')?
                    cate.includes(value.media_type)&&
                    <PersonItem value={value} key={value.id}/>:
                    cate.includes(value.media_type)&&
                    <MovieItem value={value} key={value.id}/>
                  }):searchItems?<h2>找不到符合的結果</h2>:<Loading/>}
                  </div>
            </div>
          </>)
}
export default Search