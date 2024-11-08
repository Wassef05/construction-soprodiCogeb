import React, { useEffect, useState, useRef } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "./Items.css"; 

function Items() {
  const { t } = useTranslation(); // Get the translation function
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null); 

  const loadPost = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/soprodi/posts/${id}`);
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message, { autoClose: 2000 });
      } else {
        setPost(data);
        const slidess = data.images.map((image, index) => ({
          id: index + 1,
          image: image.url,
          title: data.title,
          description: image.description,
        }));
        setSlides(slidess);
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  useEffect(() => {
    loadPost();
  }, [id]);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev-arrow" onClick={onClick}>
        &#10094;
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next-arrow" onClick={onClick}>
        &#10095;
      </div>
    );
  };

  const settings = {
    infinite: slides.length > 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0", 
    speed: 1500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="bg-[#323232] max-w-screen h-full">
      {currentUser ? (
        <div
          id="Admin"
          className="fixed top-0 right-0 flex w-[30vw] items-center justify-between text-center bg-white/50 rounded-b-md py-2 px-2 z-50"
        >
          <button
            onClick={() => navigate(`/update_post/${id}`)}
            className="bg-blue-900 rounded-md py-2 px-7 font-heading text-white hover:opacity-95 text-sm"
          >
            {t('edit')} {/* Use translation key for "Edit" */}
          </button>
          <button
            onClick={() => handlePostDelete(id)}
            className="bg-red-800 py-2 px-5 rounded-md font-heading text-white hover:opacity-95 text-sm z-10"
          >
            {t('delete')} {/* Use translation key for "Delete" */}
          </button>
        </div>
      ) : null}

      <div className="p-3 bg-[#515557] fixed top-0 rounded-br-3xl w-fit z-50">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className=" flex-col justify-center items-center pt-8 h-screen overflow-hidden relative">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="p-8 sm:p-2 relative">
              <div className="lg:flex items-center justify-center">
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-3xl uniform-size cursor-pointer"
                  />
                </div>
               
                <div className={`mx-auto sm:max-w-[20vw] text-justify md:ml-8 mt-4 md:mt-0 ${index === currentSlide ? 'fade-up' : ''}`}>
                  <h1 className="sm:text-2xl text-2xl mt-6 max-w-fit pt-10 border-b-4 font-semibold text-white text-center mb-2">
                    {slide.title}
                  </h1>
                  <p className="text-white">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mobile-indicators">
          <div className="indicator left" onClick={() => {
            sliderRef.current.slickPrev(); 
          }}>
            &#10094; 
          </div>
          <div className="indicator right" onClick={() => {
            sliderRef.current.slickNext(); 
          }}>
            &#10095; 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
