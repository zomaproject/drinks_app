import { createContext, useEffect, useState } from "react";
import axios from 'axios'



const CategoriaContext = createContext()

const CategoriasProvider = ({ children }) => {

  const [categorias, setCategorias] = useState([])
  const consultarApi = async () => {
    try {

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const { data } = await axios(url)
      const categoriasApi = data.drinks
      setCategorias(categoriasApi)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    consultarApi()
  }, [])
  return (
    <CategoriaContext.Provider
      value={{
        categorias
      }}
    > {children}
    </CategoriaContext.Provider>
  )
}

export {
  CategoriasProvider
}

export default CategoriaContext

