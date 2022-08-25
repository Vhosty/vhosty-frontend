import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ObjectPageSliderImages: React.FC = () => {
    const imagesCount = 10;

    const setting = {
        items: 4,
        dots: false,
        margin: 20,
        id: "object-page-slider-images",
    };

    const sliderRef = React.useRef<any>(null);

    const onClickPrev = () => {
        sliderRef.current?.prev();
    };

    const onClickNext = () => {
        sliderRef.current?.next();
    };

    return (
        <div className="object-page-slider-images">
            <button
                className="object-page-slider-images__btn prev"
                onClick={onClickPrev}
            >
                <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 1L2.41421 6.58579C1.63316 7.36684 1.63316 8.63316 2.41421 9.41421L8 15"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <button
                className="object-page-slider-images__btn next"
                onClick={onClickNext}
            >
                <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 15L6.58579 9.41421C7.36684 8.63316 7.36684 7.36684 6.58579 6.58579L1 1"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <OwlCarousel {...setting} ref={sliderRef}>
                {Array(imagesCount)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            className="object-page-slider-images-item"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1655937334599-debb7ae30072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80s')`,
                            }}
                            key={`object-page-slider-images-item-${index}`}
                        ></div>
                    ))}
            </OwlCarousel>
        </div>
    );
};

export default ObjectPageSliderImages;
