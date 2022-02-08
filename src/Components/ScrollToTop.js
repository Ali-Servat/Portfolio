import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const ScrollToTop = () => {
     const [isVisibile, setIsVisible] = useState(false);

     const toggleVisibility = () => {
          if (window.pageYOffset) {
               setIsVisible(true);
          } else {
               setIsVisible(false);
          }
     };

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };

     useEffect(() => {
          window.addEventListener('scroll', toggleVisibility);

          return () => {
               window.removeEventListener('scroll', toggleVisibility);
          };
     }, []);
     return (
          <div className="scroll">
               <button
                    type="button"
                    onClick={scrollToTop}
                    className={
                         isVisibile ? 'opacity-100 btn btn-lg ' : 'opacity-0'
                    }
               >
                    <BiArrowFromBottom />
               </button>
          </div>
     );
};

export default ScrollToTop;
