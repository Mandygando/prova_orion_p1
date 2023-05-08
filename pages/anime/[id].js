import Link from 'next/link'
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../componentes/Pagina'
import apiAnimes from '../../services/apiAnimes'


const index = ({ anime }) => {

  return (
    <Pagina titulo="Animes">
      <Row>
        <Col md={7}>
          <h1>Despesas</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map((item, lista) => (
                <tr key={lista}>
                  <td>{item.dataDocumento}</td>
                  <td>{item.tipoDespesa}</td>
                  <td>{item.valorDocumento}</td>
                </tr>
              ))}
            </tbody>

          </Table>
        </Col>
      </Row>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

  const lista = await apiAnimes.get('/anime/')
  const anime = mal_id.data

  return {
      props: { anime },
  }
}