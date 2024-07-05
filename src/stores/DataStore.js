import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

const API_INFO = import.meta.env.VITE_INFO_API;
const API_IMAGE = import.meta.env.VITE_IMAGE_API;
const API_BUDGET = import.meta.env.VITE_BUDGET_API;
const API_SIMILLAR = import.meta.env.VITE_SIMILLAR_API;
const API_TRAILER = import.meta.env.VITE_TRAILER_API;

export const useInfoMovie = defineStore('infoMovie', () => {
  const film = ref([])

  const getInfo = async (id) => {
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
          headers: {
            'X-API-KEY': API_INFO,
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
            'X-API-KEY': API_IMAGE,
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
            'X-API-KEY': API_BUDGET,
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
            'X-API-KEY': API_SIMILLAR,
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
            'X-API-KEY': API_TRAILER,
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
