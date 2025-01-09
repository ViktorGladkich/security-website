import { useRef, useEffect } from 'react';
import style from './InfiniteScroll.module.scss';

const InfiniteScroll = ({ images }) => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const animationFrameRef = useRef(null);
    const isPausedRef = useRef(false);
    const imageWidthRef = useRef(0);

    useEffect(() => {
        if (scrollRef.current && images.length > 0) {
            const firstImage = scrollRef.current.querySelector(`.${style.image}`);
            if (firstImage) {
                imageWidthRef.current = firstImage.offsetWidth;
            }
        }
    }, [images]);


    useEffect(() => {
        const container = containerRef.current;
        const scrollElement = scrollRef.current;

        let scroll = () => {
            if (!scrollElement || !container || isPausedRef.current) return;
             if (scrollElement.scrollLeft >= imageWidthRef.current * images.length) {
                scrollElement.scrollLeft = 0;
                }
                scrollElement.scrollLeft += 1;

                animationFrameRef.current = requestAnimationFrame(scroll);
        };
        if(scrollElement){
            scroll()
        }
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [images]);

      useEffect(() => {
            if (scrollRef.current) {
               scrollRef.current.scrollLeft = 0;
            }
         }, [images])
    const handleMouseEnter = () => {
        isPausedRef.current = true;
     if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
         }
    };

    const handleMouseLeave = () => {
         isPausedRef.current = false;
          if (scrollRef.current) {
             if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
           const container = containerRef.current;
            const scrollElement = scrollRef.current;
                let scroll = () => {
                    if (!scrollElement || !container || isPausedRef.current) return;
                     if (scrollElement.scrollLeft >= imageWidthRef.current * images.length) {
                       scrollElement.scrollLeft = 0;
                }
                 scrollElement.scrollLeft += 1;
                 animationFrameRef.current = requestAnimationFrame(scroll);
                  };
                   scroll()
                }
    };

    return (
        <div
            className={style.container}
            ref={containerRef}
             onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div ref={scrollRef} className={style["scroll-container"]}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`slide ${index + 1}`} className={style.image} />
                ))}
                {images.map((image, index) => (
                  <img key={index + images.length} src={image} alt={`slide ${index + 1}`} className={style.image} />
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;