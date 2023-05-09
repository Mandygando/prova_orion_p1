import apiAnimes from '@/services/apiAnimes'
import React from 'react'
import styles from './Imagem.module.css'

const Imagem = ({anime}) => {
  return (
  <div className={styles.container}>
        <img src={anime.images.jpg.large_image_url}>
        </img>
    </div>
  )
}

export default Imagem

export async function getServerSideProps(context) {

const id = context.params.id
const resultado = await apiAnimes.get("/anime/" + id)
const anime = resultado.data.data

return {
      props: {
        anime
      },
    }
  }