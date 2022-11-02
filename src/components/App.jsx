import { useState, useEffect } from 'react';
import { Box } from './Box';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import RequestImg from './Request/Request';
import Searchbar from './Searchbar/Searchbar';
import { Notify } from 'notiflix';

export function App() {
    const [search, setSearch] = useState(null);
    const [images, setImages] = useState([]);
    const [totalHits, setTotalHits] = useState(0);
    const [loading, setLoading] = useState(Boolean);
    const [page, setPage] = useState(1);
    // const [buttonMore, setButtonMore] = useState(false);

    // const memoizedTotalHits = useCallback(() => {
    //     setTotalHits(totalHits);
    //     setButtonMore(images.length === totalHits);
    // }, [totalHits]);

    useEffect(() => {
        const controller = new AbortController();
        if (!search) {
            return;
        }

        setLoading(true);
        RequestImg(search, page).then(response => {
            const { hits, totalHits } = response;
            if (hits.length === 0) {
                setLoading(false);
                return Notify.failure(
                    'we could not find anything, please try again'
                );
            }

            setImages(prevState => [...prevState, ...hits]);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setTotalHits(totalHits);
            // memoizedTotalHits();
            setLoading(false);
        });
        return () => {
            controller.abort();
        };
    }, [search, page]);

    // useEffect(() => {
    //     setButtonMore(images.length === totalHits);
    // }, [images.length, totalHits]);

    const onNewSubmit = input => {
        if (!input) {
            return;
        }
        setPage(1);
        setImages([]);
        return setSearch(input);
    };

    const onLoadMore = () => {
        return setPage(prevState => prevState + 1);
    };

    let visual = '';
    if (loading === true) {
        visual = (
            <>
                <ImageGallery images={images} />
                <Loader />
            </>
        );
    } else if (loading === false && images.length !== totalHits) {
        visual = (
            <>
                <ImageGallery images={images} />
                {/* {buttonMore && <Button onClick={onLoadMore} />} */}
                <Button onClick={onLoadMore} />
            </>
        );
    } else if (images.length === totalHits) {
        visual = (
            <>
                <ImageGallery images={images} />
            </>
        );
    }

    return (
        <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
            <Searchbar onSubmit={onNewSubmit} />
            {visual}
        </Box>
    );
}
