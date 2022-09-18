import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import {searchItem, removeSearch} from '../redux/action/search'
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../component/MovieItem";
import Loading from "../component/Loading";

const Search =()=>{
  const [ cate, setCate ] = useState('movie')
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage] = useState(20);
  const { searchInput } = useParams();
  const dispatch = useDispatch();

    const stateList = useSelector(state=> state.searchItem.items)
    const statePages = useSelector(state=> state.searchItem.count)
    
     const Pages = useMemo(()=> {
      if(currentPage){
        dispatch(searchItem(searchInput, cate, currentPage))
      }
      return statePages?Math.ceil(statePages/PerPage):0
    },[currentPage, statePages])   

    // const ShowList = useMemo(()=> {
    //   if(currentPage){
    //     dispatch(searchItem(searchInput, cate, currentPage))
    //   }
    //   return stateList
    // },[currentPage, cate])    

    // console.log('stateCount',statePages)
  
    useEffect(() => {
        if (searchInput && searchInput!==''){
          dispatch(searchItem(searchInput, cate, currentPage))
        }
        return () => {
          dispatch(removeSearch())  
        };
      }, [searchInput,cate]);
    return(<>
             <div className="search">
                <div className="category">
                  <span className={cate==='movie'?'active':''}
                  onClick={()=>setCate('movie')}
                  >Movie</span>
                  <span className={cate==='tv'?'active':''}
                   onClick={()=>setCate('tv')}
                  >TV show</span>
                </div>
                {
                  !stateList?<Loading/>:
                  <div className="searchList_wrap" style={{flexWrap:'wrap'}}>
                  {
                    stateList&&stateList.length?stateList.map(value=>
                      <MovieItem value={value} key={value.id}/>):
                      (currentPage>Pages?<h2>找不到符合的結果。</h2>:< Loading/>)
                  }
                </div>}
             </div>
             <div className="pagination">
                    <input type="number"  value={currentPage} onChange={(e)=>setCurrentPage(e.target.value)}/>
                   <p>{Pages}</p>
              </div>
          </>)
}
export default Search