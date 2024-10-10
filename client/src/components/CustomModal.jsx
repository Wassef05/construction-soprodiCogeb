// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Ensure accessibility by linking to your root element

// export default function CustomModal({ isOpen, onRequestClose, content }) {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={{
//         overlay: {
//           backgroundColor: 'rgba(0, 0, 0, 0.75)',
//           backdropFilter: 'blur(8px)',
//         },
//         content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//           backgroundColor: '#000',
//           color: '#fff',
//           borderRadius: '10px',
//           width: '400px',
//           padding: '20px',
//           textAlign: 'left',
//         },
//       }}
//     >
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">À propos de nous</h2>
//         <div className="text-sm">
//           {content.split('\n').map((text, index) => (
//             <p key={index} className="mb-2">
//               {text}
//             </p>
//           ))}
//           <ul className="list-disc ml-5 text-[#F5B94C]">
//             <li>La société SOMA</li>
//             <li>La Société SEMIT</li>
//             <li>La Société FASITEX</li>
//             <li>La Société RE BE</li>
//             <li>La Société Millet Mountain Group</li>
//             <li>La Société Agro Mélange Technologie « AMT »</li>
//             <li>La Société MED Expo</li>
//           </ul>
//         </div>
//       </div>
//     </Modal>
//   );
// }
import React, { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalComponent({ isOpen, onClose, content }) {
  // Use effect to apply blur to the background and hide other content when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.body.classList.add("overflow-hidden"); // Prevent scrolling
    } else {
      document.body.classList.remove("modal-open");
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
          backdropFilter: 'blur(8px)', 
          zIndex: 9999, 
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '10px',
          width: '90%',  
          maxWidth: '600px', 
          padding: '20px',
          textAlign: 'left',
          zIndex: 10000, 
          overflow: 'auto', 
        },
      }}
    >
      <div>
        <h2 className="text-2xl md:text-3xl text-[#F5B94C] font-semibold mb-4">À propos de nous</h2>
        <div className="text-sm">
          {content.split('\n').map((text, index) => (
            <p key={index} className="mb-2">
              {text}
            </p>
          ))}
          <ul className="list-disc ml-5 text-[#F5B94C] mt-4">
            <li>La société SOMA</li>
            <li>La Société SEMIT</li>
            <li>La Société FASITEX</li>
            <li>La Société RE BE</li>
            <li>La Société Millet Mountain Group</li>
            <li>La Société Agro Mélange Technologie « AMT »</li>
            <li>La Société MED Expo</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
