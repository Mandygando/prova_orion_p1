import { HiSearch } from "react-icons/hi";
import apiAnimes from '@/services/apiAnimes';
import React from 'react'
import { Table } from 'react-bootstrap';
import Pagina from "../../componentes/Pagina";
import Link from "next/link";

const index = ({ animes }) => {
  return (
    <Pagina titulo='Anime'>

    <Table striped bordered>
      <thead>
        <tr>
          <th>Detalhes</th>
          <th>Título</th>
          <th>Duração</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
      {animes.map(item => (
        <tr key={item.mal_id}>
        <td>
            <Link href={'/animes/' + item.mal_id}>
                <HiSearch /> 
            </Link>
        </td>
         <td>{item.title}</td>
         <td>{item.duration}</td>
         <td>{item.year}</td>
       </tr>
      ))}

      </tbody>
    </Table>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnimes.get("/anime")
    const animes = resultado.data.data
    return {
      props: {
        animes
      },
    }
  }