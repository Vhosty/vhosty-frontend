import React from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface ImageBoxProps {
    state: boolean;
    setState: (status: boolean) => void;
    images: string[];
}

const ImageBox: React.FC<ImageBoxProps> = ({state, setState, images}) => {
    const [imageBoxState, setImageBoxState] = React.useState(state);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    React.useEffect(() => {
        setImageBoxState(state);
    }, [state]);

    return (
        <>
            {imageBoxState ? (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                    }
                    onCloseRequest={() => {
                        setImageBoxState(false);
                        setState(false);
                        setPhotoIndex(0);
                    }}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + images.length - 1) % images.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                    animationDuration={200}
                />
            ) : null}
        </>
    );
};

export default ImageBox;
