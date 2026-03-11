import React, { useEffect, useRef, useState } from 'react';

const Modal = ({ modalmsg }) => {
  const dialogRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true); // Control visibility with state

  useEffect(() => {
    // Only trigger if state is true and ref exists
    if (isVisible && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [isVisible]);

  const handleClose = (e) => {
    e.preventDefault(); // Prevent any form submission behavior

    if (dialogRef.current) {
      dialogRef.current.close(); // Close native dialog
    }
    setIsVisible(false); // Remove from React state
  };

  // If state is false, don't render anything
  if (!isVisible) return null;

  return (
    <dialog
      ref={dialogRef}
      id="pregnancy-dialog"
      // Added 'open' attribute logic and forced centering with fixed inset-0
      className="fixed inset-0 z-50 m-auto flex h-fit w-full max-w-lg items-center justify-center bg-transparent p-4 outline-none backdrop:bg-gray-600/80 backdrop:backdrop-blur-sm"
      onCancel={handleClose} // Handles 'Esc' key naturally
    >
      <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:size-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-amber-600">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900">Important: Pregnancy Policy</h3>
              <div className="mt-2 text-sm text-gray-600 space-y-3">
                <p>
                  If you are <strong>pregnant</strong>, please do not book via the website.
                  These sessions require a specialist.
                </p>
                {modalmsg && <p className="italic">{modalmsg}</p>}
                <p className="font-semibold text-gray-900">
                  Please call the shop directly to book.
                  <br />
                  <a href="tel:0280187443" className="" aria-label='Call 02 8018 7443'>(02) 8018 7443</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex w-full justify-center rounded-md btn lg:ml-4 text-sm font-semibold shadow-sm  sm:ml-3 sm:w-auto"
          >
            I understand
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;