import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './controls-slice';
import { selectControls } from './controls-slice';


export const useFilter = () => {

   const dispatch = useDispatch()
   const { filter } = useSelector(selectControls)

   const handleFilter = (region) => {
      dispatch(setFilter(region.value))
   }

   return [filter, handleFilter]
}

