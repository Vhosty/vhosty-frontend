import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {setObjectsPage} from "../../../redux/actions/objects/objects";

const ObjectsCatalogPagination: React.FC = () => {
    const dispatch = useDispatch();

    const {items, totalCount, page} = useTypedSelector(({objects}) => objects);

    const totalPages: number = Math.ceil(totalCount / items.length);

    const totalPagesArray: number[] = Array(totalPages)
        .fill(0)
        .map((_, index) => index + 1);

    const setCurrentPage = (number: number) => {
        if (number >= 1 && number <= totalPages) {
            dispatch(setObjectsPage(number));
        }
    };

    return (
        <div className="objects-catalog-block-pagination">
            <button
                className={`objects-catalog-block-pagination__btn prev ${
                    page === 1 ? "disabled" : ""
                }`}
                onClick={() => setCurrentPage(page - 1)}
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
            <div className="objects-catalog-block-pagination-number">
                {page > 1 ? (
                    <>
                        <p
                            className={`objects-catalog-block-pagination-number__item ${
                                page === 1 ? "active" : ""
                            }`}
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </p>

                        <p className="objects-catalog-block-pagination-number__item disabled">
                            ...
                        </p>
                    </>
                ) : null}

                {totalPagesArray
                    .slice(
                        page + 3 < totalPages ? page - 1 : totalPages - 4,
                        page + 3
                    )
                    .map((currentPage, index) => (
                        <p
                            className={`objects-catalog-block-pagination-number__item ${
                                page === currentPage ? "active" : ""
                            }`}
                            key={`objects-catalog-block-pagination-number__item-${index}`}
                            onClick={() => setCurrentPage(currentPage)}
                        >
                            {currentPage}
                        </p>
                    ))}

                {totalPages > 4 && page + 3 < totalPages ? (
                    <>
                        <p className="objects-catalog-block-pagination-number__item disabled">
                            ...
                        </p>

                        <p
                            className={`objects-catalog-block-pagination-number__item ${
                                totalPages === page ? "active" : ""
                            }`}
                            onClick={() => setCurrentPage(totalPages)}
                        >
                            {totalPages}
                        </p>
                    </>
                ) : null}
            </div>
            <button
                className={`objects-catalog-block-pagination__btn next ${
                    page === totalPages ? "disabled" : ""
                }`}
                onClick={() => setCurrentPage(page + 1)}
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
        </div>
    );
};

export default ObjectsCatalogPagination;
