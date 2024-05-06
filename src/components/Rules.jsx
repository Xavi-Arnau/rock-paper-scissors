import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
import rulesImage from "../assets/image-rules.svg";

const Rules = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-80 backgrop-blur-sm flex justify-center items-center z-30"
    >
      <div className="bg-white w-1/5 flex flex-col gap-4 rounded-lg">
        <div className="flex flex-row justify-between items-center py-4 px-8">
          <h2 className="text-2xl font-bold uppercase text-slate-600">Rules</h2>
          <AiOutlineClose
            className="cursor-pointer"
            size={26}
            color="grey"
            onClick={onClose}
          />
        </div>
        <div className="py-8 px-8">
          <img className="object-fit mx-auto" src={rulesImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
