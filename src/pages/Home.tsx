import { useEffect, useState } from 'react';
import SearchComp from '../components/SearchComp';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchFail, fetchStart, getSuccessProduct } from '../features/productsSlice';
import { EventFunc, Products } from '../types';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error, productsList } = useAppSelector((state) => state.products);

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(`https://dummyjson.com/products/search?q=${search}`);
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchComp handleChange={handleChange} />

      {loading ? (
        error ? (
          <div className='text-red-500'>
            <p>Something went wrong</p>
          </div>
        ) : (
          <div className='text-red-600'>
            <p>Products loading...</p>
          </div>
        )
      ) : (
        <div>
          {productsList.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
