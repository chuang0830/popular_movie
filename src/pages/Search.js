import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {searchItem, removeSearch} from '../redux/action/search'
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../component/MovieItem";

const Search =()=>{
  const { searchInput } = useParams();
    const dispatch = useDispatch();
    const searchItems = useSelector(state=>state.searchItem.items)
    console.log('searchItems',searchItems)
    useEffect(() => {
        if (searchInput && searchInput!==''){dispatch(searchItem(searchInput))}
        return () => {
          dispatch(removeSearch())  
        };
      }, [searchInput]);
    return(<>
          <div className="searchList_wrap" style={{flexWrap:'wrap'}}>
            {searchItems&&searchItems.length&&searchItems.map(value=>{
              return value.backdrop_path && <MovieItem value={value} key={value.id}/>
            })}
            </div>
          </>)
}
export default Search