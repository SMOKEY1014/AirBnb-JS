import { LISTING_LIST_FAIL, LISTING_LIST_REQUEST, LISTING_LIST_SUCCESS } from '../TypeAction/Listing';
import axios from 'axios';

export const listListing = () => async (dispatch) => {
    try {
        dispatch({ type: LISTING_LIST_REQUEST });
        // console.log(await axios.get('http://localhost:4000/listings/'))
        const { data } = await axios.get('http://localhost:4000/listings/');
        console.log(data);
        dispatch({type: LISTING_LIST_SUCCESS, payload: data});
    }
    catch (error) {
            dispatch({type: LISTING_LIST_FAIL, payload: error})
    }
}