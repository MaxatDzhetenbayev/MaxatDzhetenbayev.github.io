import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './theme-slice';
import { useEffect } from 'react';

export const useTheme = () => {

   const dispatch = useDispatch()
   const theme = useSelector(state => state.theme);
   const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   return [theme, toggleTheme]
}





