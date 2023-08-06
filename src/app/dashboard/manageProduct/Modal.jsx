import React, { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
  const formRef = useRef(null);

  return (
    <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md p-2">
      <div className="text-right mb-4">
        <button
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
          className="hover:text-pink-600"
        >
          Close
        </button>
      </div>
      <form action="" ref={formRef} onSubmit={handleSubmit}>
        <input
          defaultValue={updateData?.title}
          type="text"
          className="w-full mb-2 p-2 focus:outline-none border"
          name="title"
          placeholder="title"
          id=""
        />
        <input
          defaultValue={updateData?.price}
          type="text"
          className="w-full mb-2 p-2 focus:outline-none border"
          name="price"
          placeholder="price"
          id=""
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-5 border border-cyan-100 hover:shadow shadow-sm rounded text-cyan-400 bg-cyan-50 hover:text-cyan-600"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
