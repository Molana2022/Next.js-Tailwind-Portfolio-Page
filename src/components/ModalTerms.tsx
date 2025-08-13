import { useState } from "react";

export default function ModalTerms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="underline text-blue-600 hover:text-blue-800"
      >
        Terms and Conditions
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="mb-2">
              All content, images, and projects published on this site belong to Nasim Molana and unauthorized use is prohibited.
            </p>
            <p className="mb-2">
              This website is created to showcase portfolios and introduce services. Responsibility for the use of the information lies with the user.
            </p>
            <p className="mb-2">
              Contact information and emails received through site forms will be used solely to respond to your inquiries and will never be shared with third parties.
            </p>
            <p>
              Nasim Molana reserves the right to modify these terms at any time to improve the site and services.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
