import { useEffect, useState } from 'react';
import SearchComp from '../components/SearchComp';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addFavorites } from '../features/productsSlice';
import { EventFunc, Product } from '../types';
import Card from '../components/Card';
import useProductCall from '../hooks/useProductCall';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error, productsList,favorites } = useAppSelector((state) => state.products);

  const {getData, getCategories} =useProductCall()
 

  useEffect(() => {
    getData(search);
    getCategories()
  }, [search]);

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product:Product) => {
    if(favorites.filter((item) => item.id === product.id).length === 0){
      dispatch(addFavorites(product))
    }

  }

  return (
    <div>
      <SearchComp handleChange={handleChange} />

      {loading ? (
          <div className='mt-52'>
             <p className='text-red-500'>Products loading...</p>
          </div>
        ) : error ? (
          <div className='mt-52'>
           <p className='text-red-500'>Something went wrong</p>
          </div>
        
      ) : (
        <div className='flex justify-center items-center flex-wrap gap-5 p-5'>
          {productsList.map((item) => (
            <Card key={item.id} text={"Add to Favorites"} item={item} handleFunc={handleAdd}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
