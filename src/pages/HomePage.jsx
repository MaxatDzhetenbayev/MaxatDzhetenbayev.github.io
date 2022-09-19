import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useEffect } from 'react';
import { loadCountries } from '../store/countries/countries-actions';
import { selectAllCountries, selectCountriesInfo } from '../store/countries/countries-selectors';

export const HomePage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch()

   const countries = useSelector(selectAllCountries);
   const { status, error, qty } = useSelector(selectCountriesInfo)

   useEffect(() => {
      dispatch(loadCountries())
      console.log()
   }, [dispatch, qty])




   return (
      <>
         <Controls />

         <List>
            {countries.map((c) => {
               const countryInfo = {
                  img: c.flags.png,
                  name: c.name,
                  info: [
                     {
                        title: 'Population',
                        description: c.population.toLocaleString(),
                     },
                     {
                        title: 'Region',
                        description: c.region,
                     },
                     {
                        title: 'Capital',
                        description: c.capital,
                     },
                  ],
               };

               return (
                  <Card
                     key={c.name}
                     onClick={() => navigate(`/country/${c.name}`)}
                     {...countryInfo}
                  />
               );
            })}
         </List>
      </>
   );
};
