export const loadStorage = () => {

   try {
      const savedState = localStorage.getItem('state')

      if (savedState === null) {
         return undefined
      }
      return JSON.parse(savedState)
   } catch (err) {
      return undefined
   }
}

export const saveState = (state) => {
   try {
      const stateToBeSave = JSON.stringify(state)
      localStorage.setItem('state', stateToBeSave)
   } catch (err) {
      console.error(err)
   }

}