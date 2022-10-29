import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import { ItemStyled, ItemImgStyled } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { item } = this.props;
        const { webformatURL, tags } = item;
        const { showModal } = this.state;
        return (
            <ItemStyled>
                <ItemImgStyled
                    src={webformatURL}
                    alt={tags}
                    onClick={this.toggleModal}
                />

                {showModal && (
                    <Modal forModal={item} onClose={this.toggleModal} />
                )}
            </ItemStyled>
        );
    }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};
