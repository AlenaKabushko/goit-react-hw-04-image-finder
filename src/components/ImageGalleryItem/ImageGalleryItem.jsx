import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { ItemStyled, ItemImgStyled } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item }) {
    const [showModal, setShowModal] = useState(false);

    const { webformatURL, tags } = item;

    const toggleModal = () => {
        setShowModal(prevState => setShowModal(!prevState));
    };

    return (
        <ItemStyled>
            <ItemImgStyled
                src={webformatURL}
                alt={tags}
                onClick={toggleModal}
            />

            {showModal && <Modal forModal={item} onClose={toggleModal} />}
        </ItemStyled>
    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};
