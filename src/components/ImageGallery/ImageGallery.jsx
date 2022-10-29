import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ItemStyled } from './ImageGallery.styled';

function ImageGallery({ images }) {
    return (
        <ItemStyled>
            {images.map(item => (
                <ImageGalleryItem key={item.id} item={item} />
            ))}
        </ItemStyled>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.array,
};
