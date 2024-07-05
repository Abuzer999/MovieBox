import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

const API_KEY = import.meta.env.VITE_MOVIESEARCH_API;

export const useSearchStore = defineStore('searchStore', () => {
  const search = ref([])
  const isLoading = ref(false)
  const getSearch = async (valueInp) => {
    isLoading.value = true
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${valueInp}&page=1`,
        {
          headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json'
          }
        }
      )
      const searchData = responsive.data.films

      search.value = searchData.map((search) => ({
        id: search.filmId,
        imgUrl: search.posterUrl,
        title: search.nameRu ? search.nameRu : 'null',
        rate: search.rating !== null ? search.rating.toString() : 'null',
        year: search.year,
        genres: search.genres.map((genre) => genre.genre).join(', '),
        type: search.type === "TV_SERIES",
      }))

      console.log(searchData)
    } catch (err) {
      console.warn(err, 'search not found')
    } finally {
      isLoading.value = false
    }
  }

  return {
    getSearch,
    search,
    isLoading
  }
})
