import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');
function Modal({ forModal, onClose }) {
    const { largeImageURL, tags } = forModal;

    const keyDown = useCallback(
        e => {
            if (e.code === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    const backdropClick = useCallback(
        e => {
            if (e.currentTarget === e.target) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        window.addEventListener('keydown', keyDown);

        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    }, [keyDown]);

    return createPortal(
        <OverlayStyled onClick={backdropClick}>
            <ModalStyled src={largeImageURL} alt={tags} />
        </OverlayStyled>,
        modalRoot
    );
}

export default Modal;

Modal.propTypes = {
    forModal: PropTypes.object,
};
