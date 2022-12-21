import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedDetail, removeDetail } from "../redux/action/detail";
import Loading from "../component/Loading";
const Detail = () => {
  const { Id } = useParams();
  const location = useLocation();
  const param = location.pathname.split("/")[1];
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const { genres, poster_path, title, name, vote_average, overview } = detail;
  const defaultImg =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  useEffect(() => {
    if (Id && Id !== "") {
      dispatch(fetchSelectedDetail(Id, param));
    }
    return () => {
      dispatch(removeDetail());
    };
  }, []);
  return (
    <>
      {Object.keys(detail).length === 0 ? (
        <Loading />
      ) : (
        <div className="detail">
          <div className="detail_img">
            <img
              loading="lazy"
              src={
                poster_path === null
                  ? defaultImg
                  : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
              }
              alt={title || name}
            />
          </div>
          <div className="detail_content">
            <div className="content_genres">
              {genres?.map((v, i) => {
                return <p key={i}>{v.name}</p>;
              })}
            </div>
            <h1>
              {title || name}
              <span className="content_rating">{vote_average?.toFixed(1)}</span>
            </h1>
            <p className="content_overview">{overview}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Detail;
