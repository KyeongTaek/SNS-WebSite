import "./ImageUploadBox.scss";
import { useEffect, useState, useRef } from "react";
function ImageUploadBox({ max = 10 }) {
  function ImagePreview({ image, deleteFunc }) {
    return (
      <div className="ImagePreview" draggable>
        <img src={image} alt="preview" />
        <div className="icon_container" onClick={deleteFunc}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  }
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const uploadBoxRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const input = inputRef.current;

    const handleFiles = (files) => {
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = e.target.result;
          if (result) {
            setUploadedImages((state) => [...state, result].slice(0, max));
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const changeHandler = (event) => {
      const files = event.target.files;
      handleFiles(files);
    };

    const dropHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      handleFiles(files);
    };

    const dragOverHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    uploadBox.addEventListener("drop", dropHandler);
    uploadBox.addEventListener("dragover", dragOverHandler);
    input.addEventListener("change", changeHandler);

    return () => {
      uploadBox.removeEventListener("drop", dropHandler);
      uploadBox.removeEventListener("dragover", dragOverHandler);
      input.removeEventListener("change", changeHandler);
    };
  }, [max]);

  useEffect(() => {
    const imageJSXs = uploadedImages.map((image, index) => {
      const isDeleteImage = (element) => {
        return element === image;
      };
      const deleteFunc = () => {
        uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1);
        setUploadedImages([...uploadedImages]);
      };
      return <ImagePreview image={image} deleteFunc={deleteFunc} key={index} />;
    });
    setPreviewImages(imageJSXs);
  }, [uploadedImages]);
  return (
    <div className="ImageUploadBox">
      <label className="drag_or_click" ref={uploadBoxRef}>
        <div className="text_box">
          <h3>드래그 또는 클릭하여 업로드</h3>
          <span>여기 위에 드랍해야 올라가요!!</span>
        </div>
        <div className="icon_box">
          <i className="fas fa-arrow-circle-up"></i>
        </div>
      </label>
      <input type="file" multiple accept="image/*" ref={inputRef} />
      <div className="preview_wrapper">
        <div className="preview_container">{previewImages}</div>
      </div>
    </div>
  );
}
export default ImageUploadBox;
