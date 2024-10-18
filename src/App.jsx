import { useState, useEffect } from "react";
import quotes from './quotes.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

function App() {
   const [quote, setQuote] = useState({ quote: '', author: '' });

   const getRandomQuote = () => {
      const quoteNO = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[quoteNO]);
   };

   useEffect(() => {
      getRandomQuote();
   }, []);

   const handleReload = () => {
      getRandomQuote();
   };

   const handleCopy = () => {
      navigator.clipboard.writeText(`${quote.quote} - ${quote.author}`);
      toast.success("Quote copied to clipboard!", {
         autoClose: 5000,
      });
   };

   const handleShare = () => {
      const shareData = {
         title: "Check out this quote!",
         text: `${quote.quote} - ${quote.author}`,
         url: window.location.href,
      };
      navigator.share(shareData)
         .then(() => toast.success('Quote shared successfully!'))
         .catch((error) => toast.error('Error sharing: ' + error));
         
   };

   return (
      <>
         <div className="quote-container">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center mx-auto mt-10 border-4 border-yellow-400 animate-fadeIn">
               <h1 className="text-3xl font-bold mb-4 text-red-600">Family Guy Random Quote Generator</h1>
               <div id="quote-box" className="mb-4">
                  <p className="text-lg italic text-gray-800" id="quote">
                     {quote.quote}
                  </p>
                  <p className="text-md font-semibold text-gray-900" id="author">
                     - {quote.author}
                  </p>
               </div>
               <div className="flex justify-center mb-4">
                  <div className="tooltip">
                     <button
                        onClick={handleReload}
                        id="reload-btn"
                        className="bg-yellow-500 text-white rounded-full p-2 mx-2 hover:bg-yellow-600 transition duration-200"
                     >
                        <svg
                           className="w-6 h-6"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.293 9.293L15.586 11H19a7 7 0 1 0-7 7v-3.586l-1.707 1.707a1 1 0 0 0 0 1.414l3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586a1 1 0 0 0 0-1.414L17.293 9.293z"
                           />
                        </svg>
                     </button>
                     <span className="tooltiptext">Reload Quote</span>
                  </div>
                  <div className="tooltip">
                     <button
                        onClick={handleCopy}
                        id="copy-btn"
                        className="bg-green-500 text-white rounded-full p-2 mx-2 hover:bg-green-600 transition duration-200"
                     >
                        <svg
                           className="w-6 h-6"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 16v4H8v-4H4V4h16v12h-4z"
                           />
                        </svg>
                     </button>
                     <span className="tooltiptext">Copy Quote</span>
                  </div>
                  <div className="tooltip">
                     <button
                        onClick={handleShare}
                        id="share-btn"
                        className="bg-purple-500 text-white rounded-full p-2 mx-2 hover:bg-purple-600 transition duration-200"
                     >
                        <svg
                           className="w-6 h-6"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 8a4 4 0 0 1 0 8M12 12l-8 4m8-4l8-4m-8 4l-8-4M8 16l4 4 4-4"
                           />
                        </svg>
                     </button>
                     <span className="tooltiptext">Share Quote</span>
                  </div>
               </div>
               <div>
                Made by <a  href="https://rolandadams.free.nf" className="underline font-bold hover:text-red-500" >Adams Roland</a>
               </div>
            </div>
         </div>
         <ToastContainer />
      </>
   );
}

export default App;
