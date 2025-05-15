import { IoClose } from "react-icons/io5";
import '../assets/css/style.css'

const Member_modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <IoClose />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Member_modal
