import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
function Modal({ forModal, onClose }) {
    const { largeImageURL, tags } = forModal;

    useEffect(() => {
        window.addEventListener('keydown', keyDown);

        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    });

    const keyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const backdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

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

//=============
// export class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.keyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.keyDown);
//     }

//     keyDown = e => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     backdropClick = e => {
//         if (e.currentTarget === e.target) {
//             this.props.onClose();
//         }
//     };

//     render() {
//         const { forModal } = this.props;
//         const { largeImageURL, tags } = forModal;

//         return createPortal(
//             <OverlayStyled onClick={this.backdropClick}>
//                 <ModalStyled src={largeImageURL} alt={tags} />
//             </OverlayStyled>,
//             modalRoot
//         );
//     }
// }
