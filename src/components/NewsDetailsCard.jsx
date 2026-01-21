import { FaCalendarAlt, FaTags, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    details,
    image_url,
    author,
    tags,
  } = news;

  return (
    <div className="max-w-full">
      {/* Section Title */}
      <h2 className="text-lg font-semibold mb-4">Dragon News</h2>

      <div className="card bg-base-100 shadow-md border rounded-md">
        {/* Image */}
        <figure className="px-6 pt-6">
          <img
            src={image_url}
            alt={title}
            className="rounded-md w-full h-87.5 object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body px-6">
          {/* Title */}
          <h1 className="text-2xl font-bold leading-snug">
            {title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
            {/* Date */}
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-error" />
              <span>
                {new Date(author?.published_date).toDateString()}
              </span>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <FaTags className="text-error" />
              {tags?.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index !== tags.length - 1 && ","}
                </span>
              ))}
            </div>
          </div>

          {/* Details */}
          <p className="text-gray-600 leading-relaxed mt-3">
            {details}
          </p>

          {/* Button */}
          <div className="pt-5">
            <Link to={`/category/${news.category_id}`} className="btn btn-secondary btn-md rounded-none gap-2">
              <FaArrowLeft />
              All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
