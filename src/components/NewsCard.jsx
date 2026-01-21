import { FaBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
    } = news;

    const date = new Date(author.published_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-base-100  rounded-lg overflow-hidden shadow-sm">

            {/* 🔝 Header */}
            <div className="flex justify-between items-center bg-base-200 px-4 py-3">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold leading-none">{author.name}</h4>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaBookmark size={18} className="cursor-pointer hover:text-primary" />
                    <FaShareAlt size={18} className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* 🖼 Image */}
            <div className="p-4">
                <h2 className="md:text-xl sm:text-[14px] font-bold mb-3 leading-snug">
                    {title}
                </h2>

                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-80 object-cover rounded-lg mb-4"
                />

                {/* 📝 Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {details.slice(0, 200)}...
                    <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer ml-1">
                        Read More
                    </Link>
                </p>
            </div>

            {/* ⭐ Footer */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 ">
                <div className="flex items-center gap-1">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} className="text-orange-400" />
                    ))}
                    <span className="ml-2 text-sm font-semibold">
                        {rating.number}.0
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaRegEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
