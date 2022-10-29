import { useState } from 'react';
import { Box } from './Box';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import RequestImg from './Request/Request';
import Searchbar from './Searchbar/Searchbar';
import { Notify } from 'notiflix';

export function App() {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [totalHits, setTotalHits] = useState(0);
    const [loading, setLoading] = useState(Boolean);
    const [page, setPage] = useState(1);

    const onSubmit = async search => {
        setLoading(true);
        try {
            const { totalHits, hits } = await RequestImg(search, page);

            if (hits.length === 0) {
                Notify.failure('we could not find anything, please try again');
            }

            setImages(hits);
            setTotalHits(totalHits);
            setSearch(search);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const onLoadMoreClick = async () => {
        setLoading(true);
        setPage(prevState => prevState + 1);
        console.log(page);
        try {
            const { hits } = await RequestImg(search, page);

            setImages([...images, ...hits]);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    // render() {
    // const { images, loading, totalHits } = this.state;

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
                <Button onClick={onLoadMoreClick} />
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
            <Searchbar onSubmit={onSubmit} />
            {visual}
        </Box>
    );
}

//===========================
// export class App extends Component {
//     state = {
//         search: '',
//         images: [],
//         totalHits: 0,
//         loading: Boolean,
//     };

//     onSubmit = async search => {
//         page = 1;
//         this.setState({
//             loading: true,
//         });
//         try {
//             const { totalHits, hits } = await RequestImg(search, page);

//             if (hits.length === 0) {
//                 Notify.failure('we could not find anything, please try again');
//             }

//             this.setState({
//                 images: hits,
//                 totalHits: totalHits,
//                 search: search,
//                 loading: false,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     onClick = async () => {
//         this.setState({
//             loading: true,
//         });
//         try {
//             const { hits } = await RequestImg(this.state.search, (page += 1));

//             this.setState(prevState => ({
//                 images: [...prevState.images, ...hits],
//                 loading: false,
//             }));
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     render() {
//         const { images, loading, totalHits } = this.state;

//         let visual = '';
//         if (loading === true) {
//             visual = (
//                 <>
//                     <ImageGallery images={images} />
//                     <Loader />
//                 </>
//             );
//         } else if (loading === false && images.length !== totalHits) {
//             visual = (
//                 <>
//                     <ImageGallery images={images} />
//                     <Button onClick={this.onClick} />
//                 </>
//             );
//         } else if (images.length === totalHits) {
//             visual = (
//                 <>
//                     <ImageGallery images={images} />
//                 </>
//             );
//         }

//         return (
//             <Box
//                 display="grid"
//                 gridTemplateColumns="1fr"
//                 gridGap="16px"
//                 pb="24px"
//             >
//                 <Searchbar onSubmit={this.onSubmit} />
//                 {visual}
//             </Box>
//         );
//     }
// }
