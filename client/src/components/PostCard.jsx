import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostCard({ post }) {
  const navigate = useNavigate();
  const { title, imgUrl = [], _id } = post;

  // Get the first image URL from the imgUrl array
  const imageUrl = imgUrl.length > 0 ? imgUrl[0] : 'path/to/default-image.jpg'; // Provide a default image URL if needed

  const handleClick = () => {
    console.log(`Navigating to /items/${_id}`);
    navigate(`/items/${_id}`);
  };

  return (
    <div
      className="listing_card bg-transparent rounded-lg  group sm:mr-3 sm:ml-0 mx-3 "
      onClick={handleClick}
    >
      <div className="card-container ">
        <div className="image_container relative overflow-hidden  cursor-pointer  hover:scale-105 duration-300">
          <img
            className='max-h-[450px] min-h-[110px] w-full h-[450px] object-cover   '
            src={imageUrl}
            alt="property image"
          />
          <h2 className="text-white text-lg font-heading truncate uppercase duration-300   -mt-48  font-bold text-center  pt-20 pb-20 0 bg-red-950/30 relative py-4">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
