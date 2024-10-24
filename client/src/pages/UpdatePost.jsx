import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import cov from "../img/CoverHome.png";
import {Logo} from "../img"


const UpdatePost = () => {
  const Navigate=useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    SuperficieTotal: '',
    SuperficieCouverte: '',
    NbrEntree: '',
    parking: '',
    NbrBureau: '',
    SuperficieBureau: '',
    Surveillance: '',
    images: [{ url: '', description: '' }],
    NbrAtelier: '',
    SuperficieAtelier: '',
    FinDuBaille: '',
    Adresse: '',
  });
  const [redirect, setRedirect] = useState(false);

  const storage = getStorage(firebaseApp);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/soprodi/posts/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (index, e) => {
    const { name, value } = e.target;
    const updatedImages = formData.images.map((img, imgIndex) =>
      imgIndex === index ? { ...img, [name]: value } : img
    );
    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

  const addImage = () => {
    setFormData({
      ...formData,
      images: [...formData.images, { url: '', description: '' }],
    });
  };

  const removeImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, imgIndex) => imgIndex !== index),
    });
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file, index);
    }
  };

  const uploadImage = (file, index) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      snapshot => {
        // Vous pouvez ajouter des fonctionnalités de progression ici si vous le souhaitez
      },
      error => {
        console.error("Error uploading image:", error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        const updatedImages = formData.images.map((img, imgIndex) =>
          imgIndex === index ? { ...img, url } : img
        );
        setFormData({
          ...formData,
          images: updatedImages,
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredImages = formData.images.filter(image => image.url);
    const cleanedFormData = {
      ...formData,
      images: filteredImages,
    };


    try {
      const response = await axios.put(`http://localhost:4000/api/soprodi/posts/${id}`, cleanedFormData);
      alert("post updated");
      Navigate('/profile');    } 
      catch (error) {
      console.error('Error updating post:', error);
    }
  };


  return (
    <div className="   ">
            <div
        style={{ backgroundImage: `url(${cov})` }}
        className="bg-cover bg-center bg-no-repeat h-[100vh] opacity-50 w-full fixed -z-10">
        </div>
       <div className=''>
       <a href="/" className="w-40"><img src={Logo} className='mx-10 py-5' /></a>
       <h1 className='text-center  text-2xl font-heading font-bold text-black  -mt-16'>Modifier Une Poste</h1>
       </div> 
      <form onSubmit={handleSubmit} className="space-y-6 z-50">

        <div className="grid grid-cols-1 mx-12 lg:grid-cols-2 mt-10 gap-6">



          
          <div className='col-span-1' >
          <div className="flex flex-col mb-8">
            <label className="text-2xl font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="flex flex-col mb-10 ">
            <label className="text-2xl font-bold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          


          <div className='grid grid-cols-2'>


          <div className="max-w-[200px] flex items-center justify-between gap-2 my-2">
          <label className='text-xl font-semibold'>
          Superficie Total:
          <input
            type="number"
            name="SuperficieTotal"
            value={formData.SuperficieTotal}
            onChange={handleChange}
            required

          />
        </label>
        </div>


        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Superficie Couverte:
          <input
            type="number"
            name="SuperficieCouverte"
            value={formData.SuperficieCouverte}
            onChange={handleChange}

          />
        </label>
        </div>



        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Nbr Entree:
          <input
            type="number"
            name="NbrEntree"
            value={formData.NbrEntree}
            onChange={handleChange}
          />
        </label>
        </div>



        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Parking:
          <input
            type="number"
            name="parking"
            value={formData.parking}
            onChange={handleChange}
          />
        </label>
        </div>



        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Nbr Bureau:
          <input
            type="number"
            name="NbrBureau"
            value={formData.NbrBureau}
            onChange={handleChange}
          />
        </label>
        </div>

        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Superficie Bureau:
          <input
            type="number"
            name="SuperficieBureau"
            value={formData.SuperficieBureau}
            onChange={handleChange}
          />
        </label>
        </div>



        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Surveillance:
          <input
            type="number"
            name="Surveillance"
            value={formData.Surveillance}
            onChange={handleChange}
          />
        </label>
        </div>
        
        
        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Nbr Atelier:
          <input
            type="number"
            name="NbrAtelier"
            value={formData.NbrAtelier}
            onChange={handleChange}
          />
        </label>
        </div>


        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Superficie Atelier:
          <input
            type="number"
            name="SuperficieAtelier"
            value={formData.SuperficieAtelier}
            onChange={handleChange}
          />
        </label>
        </div>


        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Fin Du Baille:
          <input
            type="number"
            name="FinDuBaille"
            value={formData.FinDuBaille}
            onChange={handleChange}
          />
        </label>
        </div>



        <div className="max-w-[200px] flex items-center justify-between gap-2  my-2">
        <label className='text-xl font-semibold'>
          Adresse:
          <input
            type="text"
            name="Adresse"
            value={formData.Adresse}
            onChange={handleChange}
            required
          />
        </label>
        </div>
        </div>
        </div>

        
        <div className='mx-12'>
  <h2 className="text-2xl font-bold">Images</h2>
  {formData.images.map((image, index) => (
    <div key={index} className="flex flex-col lg:flex-row items-center lg:space-x-4 mt-4 space-y-4 lg:space-y-0">
      <input
        type="file"
        onChange={(e) => handleFileChange(e, index)}
        
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 w-full lg:w-auto"
      />
      <input
        type="text"
        name="description"
        value={image.description}
        onChange={(e) => handleImageChange(index, e)}
        placeholder="Image description"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 w-full lg:w-auto"
      />
      {image.url && <img src={image.url} alt="Uploaded" className="h-16 w-16 object-cover"/>}
      <button type="button" onClick={() => removeImage(index)} className="bg-red-500 text-white px-3 py-1 rounded w-full lg:w-auto">
        Remove
      </button>
    </div>
  ))}
  <div className='flex justify-center items-center mt-4'>          
    <button type="button" onClick={addImage} className="bg-green-500 text-white px-4 py-2 rounded">
      Add Image
    </button>
  </div>
</div>
  
        </div>

        <div className='flex justify-center items-center mb-10'>
          <button type="submit" className="bg-[#042181d9] text-white font-semibold mb-10 py-2 px-4 rounded mt-4">
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
