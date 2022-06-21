import React from "react";

const ObjectsCatalogPagination: React.FC = () => {
    return (
        <div className="objects-catalog-block-pagination">
            <button className="objects-catalog-block-pagination__btn disabled prev">
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
            <div className="objects-catalog-block-pagination-number">
                <p className="objects-catalog-block-pagination-number__item active">
                    1
                </p>

                <p className="objects-catalog-block-pagination-number__item">
                    2
                </p>

                <p className="objects-catalog-block-pagination-number__item">
                    3
                </p>

                <p className="objects-catalog-block-pagination-number__item">
                    4
                </p>

                <p className="objects-catalog-block-pagination-number__item disabled">
                    ...
                </p>

                <p className="objects-catalog-block-pagination-number__item">
                    20
                </p>
            </div>
            <button className="objects-catalog-block-pagination__btn next">
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
        </div>
    );
};

export default ObjectsCatalogPagination;
