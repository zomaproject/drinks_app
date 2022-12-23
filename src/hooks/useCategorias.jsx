import { useContext } from "react"
import CategoriaContext from "../context/CategoriasProvider"



export default function useCategorias() {
  return useContext(CategoriaContext)
}