import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useInfoMovie = defineStore('infoMovie', () => {
  const film = ref([])

  const getInfo = async (id) => {
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
          headers: {
            'X-API-KEY': '0b44cf43-af4d-4e92-90b8-e822f2a94935',
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await responsive.data
      film.value = data

      console.log(film.value)
    } catch (err) {
      console.warn(err, 'movies not found')
    }
  }

  return {
    getInfo,
    film
  }
})

export const useImageMovie = defineStore('imageMovie', () => {
  const poster = ref(null)

  const getPosters = async (id) => {
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL`,
        {
          headers: {
            'X-API-KEY': '7b3027ab-7fc6-4ed8-b70a-70519240569f',
            'Content-Type': 'application/json'
          }
        }
      )

      const PosterData = await responsive.data.items

      poster.value = PosterData.map((poster) => ({
        imgUrl: poster.imageUrl
      }))

      console.log(poster.value)
    } catch (err) {
      console.warn(err, 'бюджет не найден')
    }
  }

  return {
    poster,
    getPosters
  }
})

export const useBudgetMovie = defineStore('budgetMovie', () => {
  const budget = ref([])

  const getBudget = async (idBudget) => {
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${idBudget}/box_office`,
        {
          headers: {
            'X-API-KEY': 'e807779e-43e2-4131-aabc-92dfe578f36f',
            'Content-Type': 'application/json'
          }
        }
      )

      const budgetData = await responsive.data.items[0]
      budget.value = budgetData
      console.log(budget.value)
    } catch (err) {
      console.warn(err, 'бюджет не найден')
    }
  }

  return {
    budget,
    getBudget
  }
})

export const useSimilarMovie = defineStore('similarMovie', () => {
  const similar = ref([])

  const getSimilars = async (id) => {
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
        {
          headers: {
            'X-API-KEY': '3c57391b-d93f-480f-9200-67b97adc654f',
            'Content-Type': 'application/json'
          }
        }
      )

      const similarData = await responsive.data.items
      similar.value = similarData
      console.log(similar.value)
    } catch (err) {
      console.warn(err, 'бюджет не найден')
    }
  }

  return {
    similar,
    getSimilars
  }
})

export const useTrailerMovie = defineStore('trailerMovie', () => {
  const trailer = ref([])

  const getTrailer = async (id) => {
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`,
        {
          headers: {
            'X-API-KEY': '3c57391b-d93f-480f-9200-67b97adc654f',
            'Content-Type': 'application/json'
          }
        }
      )

      const trailerData = responsive.data.items.find(
        (item) => item.site === 'YOUTUBE'
      )

      trailer.value = trailerData

      console.log(trailer.value)
    } catch (err) {
      console.warn(err, 'бюджет не найден')
    }
  }

  return {
    trailer,
    getTrailer
  }
})
