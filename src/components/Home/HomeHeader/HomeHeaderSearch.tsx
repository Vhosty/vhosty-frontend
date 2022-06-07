import React from "react";

const HomeHeaderSearch: React.FC = () => {
    return (
        <div className="home-main-header-block">
            <div className="home-main-header-block-search">
                <input
                    type="text"
                    className="home-main-header-block-search__input"
                    placeholder="Поиск по ключевым словам..."
                />
            </div>
        </div>
    );
};

export default HomeHeaderSearch;
