import React from "react";
import AnimateHeight from "react-animate-height";

interface ObjectsFiltersBlockWrapperProps {
    children: React.ReactNode;

    allBtnVisible?: boolean;
}

const ObjectsFiltersBlockWrapper: React.FC<ObjectsFiltersBlockWrapperProps> = ({
    children,
    allBtnVisible,
}) => {
    const [isAllVisible, setIsAllVisible] = React.useState<boolean>(false);

    const ObjectsFiltersBlockWrapperRef = React.useRef<HTMLDivElement>(null);

    const toggleIsAllVisibleOnClick = () => {
        setIsAllVisible(!isAllVisible);
    };

    return (
        <div
            className="objects-filters-block-wrapper"
            ref={ObjectsFiltersBlockWrapperRef}
        >
            <div
                className="objects-filters-block"
                style={
                    allBtnVisible
                        ? {
                              marginBottom: isAllVisible ? "15px" : "0",
                              overflow: "hidden",
                          }
                        : {}
                }
            >
                <AnimateHeight
                    duration={300}
                    height={
                        allBtnVisible ? (isAllVisible ? "auto" : 230) : "auto"
                    }
                >
                    {children}

                    <div
                        className={`objects-filters-block-all-shadow ${
                            allBtnVisible && !isAllVisible ? "" : "hidden"
                        }`}
                    ></div>
                </AnimateHeight>
            </div>

            {allBtnVisible ? (
                <button
                    className={`objects-filters-block-all__btn ${
                        isAllVisible ? "visible" : ""
                    }`}
                    onClick={toggleIsAllVisibleOnClick}
                >
                    {isAllVisible ? "Скрыть" : "Показать больше"}

                    <svg
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L6.58579 6.58579C7.36684 7.36684 8.63316 7.36683 9.41421 6.58579L15 1"
                            stroke="#116E67"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            ) : null}
        </div>
    );
};

export default ObjectsFiltersBlockWrapper;
