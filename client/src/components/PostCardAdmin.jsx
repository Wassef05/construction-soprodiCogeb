// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const PostCardAdmin = ({ postInfo }) => {
//   if (!postInfo || !postInfo.post) {
//     return <div>pas de post avec cet id !</div>; 
//   }

//   const {
//     title,
//     description,
//     SuperficieTotal,
//     discountPrice,
//     SuperficieCouverte,
//     NbrEntree,
//     parking,
//     price,
//     NbrBureau,
//     SuperficieBureau,
//     Surveillance,
//     images,
//     NbrAtelier,
//     SuperficieAtelier,
//     FinDuBaille,
//     Adresse,
//     _id,

//   } = postInfo.post;

//   const navigate = useNavigate();

//   return (
//     <div className="rounded-md bg-white shadow-lg hover:shadow-xl">
//       <div
//         onClick={() => navigate(`/items/${_id}`)}
//         className="relative flex items-end overflow-hidden rounded-md h-[200px] cursor-pointer"
//       >
//         {<img
//           className="hover:scale-105 object-cover h-full w-full duration-300"
//           src={images[0].url}
//           alt="wallpaper"
//         />}
//       </div>
//       <div className="p-4">
//         <div onClick={() => navigate(`/items/${_id}`)} className="cursor-pointer">
//           <h2 className="text-blue-900 font-bold text-xl truncate cursor-pointer">{title}</h2>
//           <p className="mt-1 text-md text-gray-600 font-semibold  truncate">{description}</p>
//         </div>
//         <div className="mt-4 flex items-end justify-between">
//           <button
//             onClick={() => navigate(`/update_post/${_id}`)}
//             className="bg-blue-900 rounded-md py-2 px-7 font-heading text-white hover:opacity-95 text-sm"
//           >
//             Modifier
//           </button>
//           <button
//             onClick={() => postInfo.handlePostDelete(_id)}
//             className="bg-red-800 py-2 px-5 rounded-md font-heading text-white hover:opacity-95 text-sm z-10"
//           >
//             Supprimer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCardAdmin;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCardAdmin = ({ postInfo }) => {
  if (!postInfo || !postInfo.post) {
    return <div>pas de post avec cet id !</div>; 
  }

  const {
    title,
    description,
    SuperficieTotal,
    discountPrice,
    SuperficieCouverte,
    NbrEntree,
    parking,
    price,
    NbrBureau,
    SuperficieBureau,
    Surveillance,
    images,
    NbrAtelier,
    SuperficieAtelier,
    FinDuBaille,
    Adresse,
    _id,
  } = postInfo.post;

  const navigate = useNavigate();

  return (
    <div className="rounded-md bg-white shadow-lg hover:shadow-xl">
      <div
        onClick={() => navigate(`/items/${_id}`)}
        className="relative flex items-end overflow-hidden rounded-md h-[200px] cursor-pointer"
      >
        {images && images.length > 0 && images[0].url ? (
          <img
            className="hover:scale-105 object-cover h-full w-full duration-300"
            src={images[0].url}
            alt="wallpaper"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            Image non disponible
          </div>
        )}
      </div>
      <div className="p-4">
        <div onClick={() => navigate(`/items/${_id}`)} className="cursor-pointer">
          <h2 className="text-blue-900 font-bold text-xl truncate cursor-pointer">{title}</h2>
          <p className="mt-1 text-md text-gray-600 font-semibold  truncate">{description}</p>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <button
            onClick={() => navigate(`/update_post/${_id}`)}
            className="bg-blue-900 rounded-md py-2 px-7 font-heading text-white hover:opacity-95 text-sm"
          >
            Modifier
          </button>
          <button
            onClick={() => postInfo.handlePostDelete(_id)}
            className="bg-red-800 py-2 px-5 rounded-md font-heading text-white hover:opacity-95 text-sm z-10"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCardAdmin;
