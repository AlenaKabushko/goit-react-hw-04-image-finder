import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ onClick }) {
    return (
        <LoadMore type="button" onClick={onClick}>
            Load more...
        </LoadMore>
    );
}

export default Button;

Button.propType = {
    onClick: PropTypes.func,
};
