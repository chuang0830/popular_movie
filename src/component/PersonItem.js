const PersonItem = ({ value }) => {
  const { profile_path, name } = value;
  return (
    <>
      <div className="person_item">
        <div className="person_img">
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`}
            alt=""
          />
        </div>
        <div className="person_name">{name}</div>
      </div>
    </>
  );
};
export default PersonItem;
