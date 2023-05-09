import Pagina from '@/componentes/Pagina'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import React from 'react'
import Link from 'next/link'
import apiAnimes from '@/services/apiAnimes'
import { AiOutlineCaretLeft } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

const Detalhes = ({ anime }) => {
    return (
        <Pagina titulo={anime.title}>
            <Row>
                <Col md={4}>
                    <Card border="danger" bg="danger">
                        <Card.Header bg="danger">Foto</Card.Header>
                        <Card.Body >
                            <CardImg src={anime.images.jpg.large_image_url} />
                            <Col>
                                <Link className='btn btn-primary mt-3 mb-3 pl-3' target="_blank" href={'/imagens/' + anime.mal_id}> <GoLinkExternal /> Ampliar</Link>
                            </Col>
                        </Card.Body>


                    </Card>

                    <Col>
                        <Link className='btn btn-success mt-3' href={'/animes/'}>
                            <AiOutlineCaretLeft /> Voltar</Link>
                    </Col>
                </Col>

                <Col md={8}>

                    <Card border="danger">
                        <Card.Header bg="danger" text="light">{anime.title}</Card.Header>
                        <Card.Body bg='white'>
                            <p><strong>Episódios: </strong> {anime.episodes}</p>
                            <p><strong>Status: </strong> {anime.status}</p>
                            {
                                anime[anime.aired.prop.from.year]
                                    ?
                                    <p><strong>Ano: </strong> {anime.aired.prop.from.year}</p>
                                    :
                                    <p></p>
                            }
                            <p><strong>Ano: </strong> {anime.aired.prop.from.year}</p>
                            <p><strong>Duração: </strong> {anime.duration}</p>
                            <p><strong>Score: </strong> {anime.score}</p>
                            <p>
                                {anime.synopsis}
                            </p>
                        </Card.Body>
                    </Card>


                </Col>

            </Row>

        </Pagina>
    )
}

export default Detalhes


export async function getServerSideProps(context) {

    const id = context.params.id
    const resultado = await apiAnimes.get("/anime/" + id)
    const anime = resultado.data.data

    return {
        props: {
            anime,

        },
    }
}