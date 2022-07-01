import React from "react";

const HeaderTransparentSearch: React.FC = () => {
    return (
        <div className="header-transparent-block">
            <div className="header-transparent-block-search">
                <input
                    type="text"
                    className="header-transparent-block-search__input"
                    placeholder="Поиск по ключевым словам..."
                />
            </div>
        </div>
    );
};

export default HeaderTransparentSearch;
