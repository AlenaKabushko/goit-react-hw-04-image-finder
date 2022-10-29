import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
    Header,
    FormStyled,
    SearchButton,
    FieldStyled,
} from './Searchbar.styled';
import { TiZoomOutline } from 'react-icons/ti';

function Searchbar({ onSubmit }) {
    const handleSubmit = values => {
        const { search } = values;
        onSubmit(search);
    };

    return (
        <Header className="searchbar">
            <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
                <FormStyled>
                    <SearchButton type="submit" className="button">
                        <TiZoomOutline size={30} />
                    </SearchButton>

                    <FieldStyled
                        className="input"
                        name="search"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </FormStyled>
            </Formik>
        </Header>
    );
}

export default Searchbar;

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
};
