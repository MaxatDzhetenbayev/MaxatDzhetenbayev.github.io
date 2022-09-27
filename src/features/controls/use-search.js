import { useDispatch, useSelector } from 'react-redux';
import { selectControls } from './controls-slice';
import { setSearch } from './controls-slice';

export const useSearch = () => {

   
   const dispatch = useDispatch()
   const { search } = useSelector(selectControls)

   const handleSearch = (e) => {
      dispatch(setSearch(e.target.value))
   }

   return [search, handleSearch]
} 