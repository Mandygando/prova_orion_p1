import Link from 'next/link'
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../componentes/Pagina'
import apiAnimes from '../../services/apiAnimes'


const index = ({ animes }) => {
    return (
      <Pagina titulo="Animes">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Detalhes</th>
              <th>titulo</th>
              <th>Duração</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime) => (
              <tr key={anime.mal_id}>
                <td>{anime.mal_id}</td>
                <td>{anime.title}</td>
                <td>{anime.start_date}</td>
                <td>
                  <Link href={`/animes/${anime.mal_id}`}>

                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    );
  };
  

export default index

export async function getServerSideProps() {
    const resultado = await apiAnimes.get('/anime');
    const animes = resultado.data.data



    return {
      props: { animes },
    };
  }