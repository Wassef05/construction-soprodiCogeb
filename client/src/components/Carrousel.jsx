import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import PostCard from "./PostCard";

const NextArrowSVG = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="next-arrow cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrowSVG = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev-arrow cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default function Carrousel() {
  const [loading, setLoading] = useState(true);
  const [postsListings, setPostsListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/api/soprodi/posts/`);

        const contentType = res.headers.get("content-type");
        if (res.ok && contentType && contentType.includes("application/json")) {
          const json = await res.json();
          if (Array.isArray(json) && json.length > 0) {
            setPostsListings(json);
          } else {
            console.error("Invalid data format:", json);
            setPostsListings([]);
          }
        } else {
          console.error(
            "Unexpected response or content type:",
            contentType,
            await res.text()
          );
          setPostsListings([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setPostsListings([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrowSVG />,
    prevArrow: <PrevArrowSVG />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

if (!Array.isArray(postsListings) || postsListings.length === 0) {
  return (
    <div className="text-center mt-10 text-gray-600">
      <p className="text-lg font-semibold">Aucun contenu disponible pour le moment.</p>
      <p className="text-sm">Veuillez revenir plus tard ou contactez-nous pour plus d'informations.</p>
    </div>
  );
}


  return (
    <section
      className="py-6 h-auto bg-[#323232]" // Adjust height for better mobile experience
      id="locaux"
      name="locaux"
      style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: "1rem",
        textAlign: "justify",
      }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F5B94C] text-center mb-6 sm:mb-8">
        LOCAUX
      </h1>
      <div className="mx-4 sm:mx-6 lg:mx-8 relative"> {/* Reduced padding for better mobile view */}
        <Slider {...settings} className="z-10 relative px-4 sm:px-6 gap-3 pb-20">
          {postsListings.map((post) => {
            const imageUrl =
              post.images.length > 0
                ? post.images[0].url
                : "path/to/default-image.jpg";

            return (
              <PostCard
                key={post._id}
                post={{ title: post.title, imgUrl: [imageUrl], _id: post._id }}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
