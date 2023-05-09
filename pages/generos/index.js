import apiAnimes from '@/services/apiAnimes';
import React from 'react'
import Pagina from "../../componentes/Pagina";

const index = ({ generos }) => {

return (
    <Pagina titulo='Gêneros'>
    <ul>
        {generos.map(item => (
          <li key={item.mal_id}>{item.name} ({item.count})</li>
        ))}
    </ul>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnimes.get("/genres/anime")
    const generos = resultado.data.data
    return {
      props: { generos},
    }
  }
