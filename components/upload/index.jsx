import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Image from "next/image";
import { updateImage, getUserById } from "../../stores/actions/user";

export default function Upload({ showImage, setShowImage }) {
  const dispatch = useDispatch();
  const idUser = Cookies.get("id");
  const [form, setForm] = useState({});
  const [uiImage, setUiImage] = useState(null);
  const handleFormImage = (e) => {
    e.preventDefault();
    const { name, files } = event.target;
    setForm({ [name]: files[0] });
    setUiImage(URL.createObjectURL(files[0]));
  };
  const handleImage = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }
      await dispatch(updateImage(idUser, formData));
      await dispatch(getUserById(idUser));
      alert("SUCCESS UPLOADING IMAGE");
      setShowImage(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showImage ? null : (
        <div className="edit__main">
          <div className="container">
            <div className="edit__card">
              <div className="row">
                <div className="col-10">
                  <h1 className="edit__tittle">Upload Image</h1>
                </div>
                <div className="col-2">
                  <button className="edit__close" onClick={() => setShowImage(false)}>
                    <BsFillBookmarkXFill />
                  </button>
                </div>
              </div>
              <p className="edit__des mb-4">Upload your file image</p>
              <Image src={uiImage ? uiImage : "/photoProfile.jpg"} alt="uploded image" width={70} height={70} />
              <form>
                <h1 className="edit__label mt-4">Edit your photo profile</h1>
                <input type="file" className="edit__imageForm" name="image" placeholder="Drop your image file" onChange={handleFormImage} />
                <div className="edit__button">
                  <button className="edit__submitButton" onClick={handleImage}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
