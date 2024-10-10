import {  useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEdit } from "react-icons/ai";
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseApp } from '../firebase.js'
import { loddingStart, signoutFailed, signoutSuccess, userDeleteFail, userDeleteSuccess, userUpdateFailed, userUpdateSuccess } from '../redux/user/userSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import PostCardAdmin from '../components/PostCardAdmin.jsx';
import Footer from '../components/Footer.jsx';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import logo from "../img/Logo.png"








const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [uploadingPerc, setUploadingPerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const dispatch = useDispatch();
 
  

  const [userPosts, setUserPost] = useState({
    isPostExist: false,
    posts: [],
  });

  const [userPostLoading, setUserPostLoading] = useState(false);

  const fileRef = useRef(null);
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleFileUpload = (file) => {
    if (file) {
      const fireBaseStorage = getStorage(firebaseApp);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(fireBaseStorage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadingPerc(Math.round(progress));
        },
        (error) => {
          setFileUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setFormData({ ...formData, avatar: downloadUrl });
          });
        }
      );
    }
  };

  useEffect(() => {
    handleFileUpload(file);
  }, [file]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    try {
      dispatch(loddingStart());
      const res = await fetch(`http://localhost:4000/api/soprodi/users/update/${currentUser._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const userData = await res.json();

      //===checking reqest success or not ===//
      if (userData.success === false) {
        dispatch(userUpdateFailed(userData.message));

        //===showing error in tostify====//
        toast.error(userData.message, {
          autoClose: 5000,
        });
      } else {
        dispatch(userUpdateSuccess(userData));
        toast.success("Profile updated successfully", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      dispatch(userUpdateFailed(error.message));
      toast.error(error.message, {
        autoClose: 2000,
      });
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(loddingStart());
      const res = await fetch(`http://localhost:4000/api/soprodi/users/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const resData = await res.json();
      //===checking reqest success or not ===//
      if (resData.success === false) {
        dispatch(userDeleteFail(resData.message));

        //===showing error in tostify====//
        toast.error(resData.message, {
          autoClose: 2000,
        });
      } else {
        dispatch(userDeleteSuccess());
      }
    } catch (error) {
      dispatch(userDeleteFail(error.message));
      toast.error(error.message, {
        autoClose: 2000,
      });
    }
  };

  const handleLogOut = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/soprodi/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutFailed(data.message));
        toast.error(data.message, {
          autoClose: 2000,
        });
      } else {
        dispatch(signoutSuccess());
        dispatch(clearSavedListing());
      }
    } catch (error) {
      dispatch(signoutFailed(error.message));
      toast.error(error.message, {
        autoClose: 2000,
      });
    }
  };

  // ======Loading User Posts  =====//

  const loadPost = async () => {
    try {
      setUserPostLoading(true);
      const res = await fetch(
        `http://localhost:4000/api/soprodi/posts`
      );
    
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message, {
          autoClose: 2000,
        });
        setUserPostLoading(false);
        dispatch(signoutSuccess());
      } else {
        setUserPost({
          ...userPosts,
          isPostExist: true,
          posts: data,
        });
        setUserPostLoading(false);
      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 2000,
      });
      setUserPostLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  const handlePostDelete = async (postId) => {
    try {
      const res = await fetch(`http://localhost:4000/api/soprodi/posts/${postId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      

      //===checking reqest success or not ===//
      if (data.success === false) {
        //===showing error in tostify====//
        toast.error(data.message, {
          autoClose: 2000,
        });
      } else {
        const restPost = userPosts.posts.filter(
          (post) => post._id !== postId
        );
       
        setUserPost({
          ...userPosts,
          posts: restPost,
        });

        toast.success(data, {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 2000,
      });
    }
  };
  const paginate = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <section>
        <div className="w-full h-10 rounded-lg"></div>
         <div className="max-w-7xl sm:max-w-full mx-auto grid md:gap-6 temp lg:grid-cols-4  md:grid-cols-5 grid-cols-1 items-start">
          <div className="profile_info p-5 bg-white  w-full  md:col-span-2 lg:col-span-1  md:max-h-full md:min-h-screen h-full col-span-1 rounded-t-md ">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-3 text-center justify-center items-center">
                <a href="/" className='mb-16'><img src={logo}/></a>
                <div className="image_container  items-center justify-center text-center relative max-w-[100px] mx-auto hidden">
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    hidden
                    accept="image/*"
                    type="file"
                    name="profile"
                    id="profile_image"
                    ref={fileRef}
                  />

                  <img
                    src={formData.avatar || currentUser.avatar}
                    onClick={() => fileRef.current.click()}
                    className="h-20 w-20 mb-3 rounded-full border-[1px]  border-blue-900"
                    alt="profile image"
                  />
                  <i className="h-4 w-4 rounded-full flex items-center justify-center bg-blue-900 text-white absolute bottom-2 right-0">
                    <AiFillEdit />
                  </i>
                </div>

                {fileUploadError ? (
                  <p className="text-xs text-red-700 font-medium text-center">
                    File upload failed
                  </p>
                ) : uploadingPerc > 0 && uploadingPerc < 100 ? (
                  <p className="text-xs text-black font-medium text-center">
                    File uploading...{uploadingPerc}%
                  </p>
                ) : (
                  uploadingPerc === 100 && (
                    <p className="text-xs text-green-600 font-medium text-center">
                      File uploaded!!!
                    </p>
                  )
                )}
              </div>

              <label className="text-left font-heading text-sm pl-1 ">
                Nom d'utilisateur
              </label><br/>
              <input
                defaultValue={currentUser.username}
                name="username"
                type="text"
                placeholder="Username"
                className="form_input bg-slate-200 rounded-md !pl-3 mt-1 !border-[1px] focus:!border-[#3A5A40] mb-3 w-full"
                onChange={handleChange}
              /><br/>
              <label className="text-left font-heading text-sm pl-1 ">
                Email
              </label><br/>
              <input
                defaultValue={currentUser.email}
                name="email"
                type="email"
                placeholder="email"
                className="  form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-blue-900 mb-3b w-full"
                onChange={handleChange}
              />
<br/>
              <label className="text-left font-heading text-sm pl-1 ">
                Mot de Passe
              </label><br/>
              <input
                type="password"
                name="password"
                placeholder="Mot de Passe"
                className="mt-1  form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-blue-900 w-full"
                onChange={handleChange}
              />

              <button
                disabled={loading}
                type="submit"
                className="py-2 px-5 bg-blue-900 text-white rounded-md w-full font-heading  mt-4 hover:opacity-90"
              >
                {loading ? "Loading..." : "Enregistrer"}
              </button>
            </form>

              <div className=" flex justify-center w-full  items-center mt-2">
                <button
                  onClick={handleLogOut}
                  className="py-2 px-5 bg-red-800 text-white rounded-md w-full font-heading mt-2 hover:opacity-90"
                  >
                  Deconnexion
                </button>


              </div>
          </div>

          
          <div
            id="adminAdd"
            className="mt-5 md:mt-0 col-span-3 post_section profile_info p-2 flex flex-col   bg-transparent  w-full overflow-y-auto"
          >
            {/*post items*/}
            <div id="Posts" className="">
              {userPostLoading ? (
                <div>
                  <p className="text-[#3A5A40] text-center font-heading text-xl">
                    Loading your posts
                  </p>
                </div>
              ) : (
                <div>
                  <div className="grid post_card grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:h-full  pb-10 px-4  md:pt-5">
                    {/* ADD NEW Project BUTTON  */}
                    <div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
                      <button
                        onClick={() => navigate("/create_post")}
                        type="submit"
                        className=" px-5 bg-slate-300 font-heading shadow-lg text-black text-lg  rounded-sm hover:opacity-95 w-full h-full flex justify-center items-center flex-col py-10 sm:py-10"
                      >
                        <BsFillPlusSquareFill className="text-center md:mb-3 md:text-5xl text-black text-sm sm:text-xl hover:text-blue-900" />
                        Créer Post
                      </button>
                    </div>

                    {userPosts.isPostExist &&
                      paginate(
                        userPosts.posts.map((post) => (
                          <PostCardAdmin
                            key={post._id}
                            postInfo={{ post, handlePostDelete }}
                          />
                        ))
                      )}
                  </div>
                  <div className="flex justify-center mt-4 gap-2">
                    <button
                      className="join-item btn bg-blue-900 text-white hover:bg-blue-900/90 
                                                    disabled:bg-[#d5d5d5] disabled:text-[#a0a0a0] rounded-md
                                                    "
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      <FaAngleDoubleLeft />
                    </button>
                    <button className="join-item btn bg-blue-900 text-white hover:bg-blue-900/90  rounded-md px-3 py-1">
                      Page {currentPage} /{" "}
                      {userPosts.posts.length % 5 == 0
                        ? Math.floor(userPosts.posts.length / 5)
                        : Math.floor(userPosts.posts.length / 5) + 1}
                    </button>
                    <button
                      className="join-item btn bg-blue-900 text-white hover:bg-blue-900/90 
                                                    disabled:bg-[#d5d5d5] disabled:text-[#a0a0a0] rounded-md
                                                    "
                      onClick={handleNextPage}
                      disabled={
                        currentPage ===
                        Math.ceil(userPosts.posts.length / itemsPerPage)
                      }
                    >
                      <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
              )}
            </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile
