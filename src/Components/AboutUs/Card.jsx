import React from "react";
import HTMLReactParser from "html-react-parser";
import mitul from "../../assets/images/mitul.webp";
const Card = ({ content, modal, setModal }) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                  <h1 className="title">What Is Satva?</h1>
                </header>
                <p className="lead">
                  Satva. Sanskrit: सत्त्व is a mode of existence. The word Satva
                  itself means true/spiritual essence, magnanimity, wisdom,
                  truth, and much more.
                </p>

                <img loading="lazy" decoding="async"
                  src={mitul}
                  alt="image"
                  width="70%"
                  className="modal-img "
                />
                {HTMLReactParser(content)}
              </article>
            </div>
            {/* <div className="blog-image">
            <img loading="lazy" decoding="async" src={props.image} className="w-50" alt="blog banner" />

            </div>

            <h3 className="blog-title">{props.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p> */}
            <button className="close-modal" onClick={toggleModal}>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
