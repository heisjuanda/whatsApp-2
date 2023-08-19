import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import imageRegister from "../../assets/img/icons/imageRegister.png";
import imageCheck from "../../assets/img/icons/imageCheck.png";
import imageLoader from "../../assets/img/icons/imageLoader.gif";
import whatsAppLogo from "../../assets/img/icons/whatsApp2Logo.png";

import "./Form.css";

export const Form = ({ fields, changeSection, submitFunc }) => {
  const navigate = useNavigate();

  const [imgUrl, setImgUrl] = useState(imageRegister);

  const handleUploadImage = (e) => {
    const file = e.target.files;
console.log(file)
    if (file.length < 1) {
        setImgUrl(imageLoader);
    } else {
        setImgUrl(imageCheck);
    }
  };

  return (
    <>
      <span className="form-logo">
        <img src={whatsAppLogo} alt="whatsApp 2 logo aplication" />
      </span>
      <form className="form" action="submit" onSubmit={submitFunc}>
        {fields.map((field, id) => {
          return (
            <div key={field.id}>
              {id < fields.length - 1 ? (
                <>
                  <label htmlFor={field.id}>
                    {field?.htmlLabel ? (
                      <div className="img-avatar">
                        <img
                          src={imgUrl}
                          alt="little img references to add an avatar"
                        />
                        <span>Add an avatar</span>
                      </div>
                    ) : (
                      field.label
                    )}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    placeholder={field?.placeHolder}
                    type={field.type}
                    {...(field?.htmlLabel
                      ? {
                          style: { display: "none" },
                          onChange: handleUploadImage,
                          onClick: handleUploadImage,
                        }
                      : {})}
                    {...(field.validation ? field.validation : {})}
                  />
                </>
              ) : (
                <>
                  <button type={field.type}>{field.text}</button>
                </>
              )}
            </div>
          );
        })}
      </form>
      <div className="form-change-section">
        <p>
          {changeSection?.text}{" "}
          <span
            onClick={() => {
              navigate(changeSection?.url);
            }}
          >
            {changeSection?.urlText}
          </span>
        </p>
      </div>
    </>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeSection: PropTypes.object,
  submitFunc: PropTypes.func.isRequired,
};
