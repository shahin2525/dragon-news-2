import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  console.log(aNews);
  const { _id, details, image_url, title } = aNews;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <Link to={`/news/${_id}`}>
            {details.slice(0, 200)}{" "}
            <span className="text-blue-400">read more ....</span>
          </Link>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
