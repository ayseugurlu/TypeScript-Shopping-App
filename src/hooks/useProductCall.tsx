
import { useAppDispatch } from '../app/hooks';
import { fetchFail, fetchStart, getSuccessCategories, getSuccessProduct } from '../features/productsSlice';
import axios from "axios"
import { Products } from '../types';

const UseProductCall = () => {

   const dispatch = useAppDispatch()
 

    const getData = async (search:string) => {
        dispatch(fetchStart());
        try {
          const { data } = await axios.get<Products>(`https://dummyjson.com/products/search?q=${search}`);
          console.log(data.products);
          dispatch(getSuccessProduct(data.products));
        } catch (error) {
          dispatch(fetchFail());
        }
      };


      const getCategories = async () => {
        dispatch(fetchStart());
        try {
            const {data} = await axios.get('https://dummyjson.com/products/category-list') 

            console.log("categories:",data);

            dispatch(getSuccessCategories(data))
        } catch (error) {
            
        }
      }

    return {getData, getCategories}
}



export default UseProductCall