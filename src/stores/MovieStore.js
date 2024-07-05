import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const API_MOVIE = import.meta.env.VITE_MOVIETOP_API;
const API_SERIES = import.meta.env.VITE_SERIESTOP_API;
const API_ALL = import.meta.env.VITE_ALLTOP_API;

export const useMovieTopStore = defineStore('movieTopStore', () => {
  const moviesTop = ref([]);
  const cachedPages = {};
  const totalPages = ref(null);

  const getTop = async (page) => {
    if (cachedPages[page]) {
      moviesTop.value = cachedPages[page].data;
      totalPages.value = cachedPages[page].totalPages;
      return;
    }
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,
        {
          headers: {
            'X-API-KEY': API_MOVIE,
            'Content-Type': 'application/json',
          },
        }
      );

      const TopData = await response.data.items;
      totalPages.value = response.data.totalPages;

      moviesTop.value = TopData.map((movie) => ({
        id: movie.kinopoiskId,
        imgUrl: movie.posterUrlPreview,
        date: movie.year,
        info: movie.countries[0].country,
        title: movie.nameRu,
        rate: movie.ratingKinopoisk !== null ? movie.ratingKinopoisk.toString() : 'null',
        teg: movie.genres
          .map((genre) => genre.genre)
          .slice(0, 3)
          .join(', '),
        isSeries: false,
      }));

      cachedPages[page] = {
        data: moviesTop.value,
        totalPages: totalPages.value,
      };
    } catch (err) {
      console.warn(err, 'Top not found');
    }
  };

  return {
    moviesTop,
    getTop,
    totalPages
  };
});

export const useSeriesTopStore = defineStore('seriesTopStore', () => {
  const seriesTop = ref([])
  const totalPages = ref(null)
  const cachedPages = {};
  const getTop = async (page) => {
    if (cachedPages[page]) {
      seriesTop.value = cachedPages[page].data;
      totalPages.value = cachedPages[page].totalPages;
      return;
    }
    try {
      const responsive = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=${page}`,
        {
          headers: {
            'X-API-KEY': API_SERIES,
            'Content-Type': 'application/json'
          }
        }
      )

      const seriesData = await responsive.data.items
      totalPages.value = responsive.data.totalPages

      seriesTop.value = seriesData.map((series) => ({
        id: series.kinopoiskId,
        imgUrl: series.posterUrlPreview,
        date: series.year,
        info: series.countries[0].country,
        title: series.nameRu,
        rate: series.ratingKinopoisk !== null ? series.ratingKinopoisk.toString() : 'null',
        teg: series.genres
          .map((genre) => genre.genre)
          .slice(0, 3)
          .join(', '),
          isSeries: true
      }))

      cachedPages[page] = {
        data: seriesTop.value,
        totalPages: totalPages.value,
      };

    } catch (err) {
      console.warn(err, 'Series not found')
    }
  }

  return {
    seriesTop,
    getTop,
    totalPages
  }
})

export const useAllStore = defineStore('allStore', () => {
  const allTop = ref([])
  const totalPages = ref(null)
  const cachedPages = {};
  const getAll = async(page) => {
    if (cachedPages[page]) {
      allTop.value = cachedPages[page].data;
      totalPages.value = cachedPages[page].totalPages;
      return;
    }
    try {
      const responsive = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${page}`, {
        headers: {
          'X-API-KEY': API_ALL,
          'Content-Type': 'application/json',
      },
      })

      const allData = await responsive.data.items
      totalPages.value = responsive.data.totalPages

      allTop.value = allData.map((all) => ({
        id: all.kinopoiskId,
        imgUrl: all.posterUrlPreview,
        date: all.year,
        info: all.countries[0].country,
        title: all.nameRu,
        rate: all.ratingKinopoisk !== null ? all.ratingKinopoisk.toString() : 'null',
        teg: all.genres
          .map((genre) => genre.genre)
          .slice(0, 3)
          .join(', '),
          isSeries: all.type === "TV_SERIES",
      }))

      cachedPages[page] = {
        data: allTop.value,
        totalPages: totalPages.value,
      };
      
    } catch (err) {
      console.warn(err, 'Top not found')
    }
  }


  return {
    allTop,
    getAll,
    totalPages,
  }
})
