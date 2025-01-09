
export const handleScroll = (setShowScrollToTop, setIsButtonAnimated) => {
  if (window.scrollY > 200) {
   setShowScrollToTop(true);
       setIsButtonAnimated(true);
 } else {
   setIsButtonAnimated(false);
    setTimeout(()=> {
       setShowScrollToTop(false)
    }, 200)
 }
};