import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selector';
import { useEffect } from 'react';
import { clearCountry, LoadCurrentCountry } from '../store/details/details-actions';


export const Details = () => {
   const { name } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const { currentCountry, status, error } = useSelector(selectDetails)

   useEffect(() => {
      dispatch(LoadCurrentCountry(name))

      return () => {
         dispatch(clearCountry)
      }
   }, [name, dispatch])

   return (
      <div>
         <Button onClick={() => navigate(-1)}>
            <IoArrowBack /> Back
         </Button>
         {status === 'loading' && <h1 style={{ textAlign: 'center', marginTop: '50px' }}>LOADING...</h1>}
         {status === 'reject' && <h1 style={{ textAlign: 'center', marginTop: '50px' }}>ERROR: {error}</h1>}
         {currentCountry && <Info push={navigate} {...currentCountry} />}
      </div >
   );
};
