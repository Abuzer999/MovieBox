<script setup>
import {
  useInfoMovie,
  useBudgetMovie,
  useImageMovie,
  useSimilarMovie,
  useTrailerMovie
} from '@/stores/DataStore'
import { ref, onMounted, watch } from 'vue'
import MovieDetail from '../components/MovieDeatail.vue'
import MovieScreenshots from '../components/MovieScreenshots.vue'
import Similars from '../components/Similars.vue'
import { useRoute } from 'vue-router'
import Mp4Player from '../components/Mp4Player.vue'
import Loader from '../components/loader/Loader.vue'

const route = useRoute()
const filmInfo = useInfoMovie()
const budgets = useBudgetMovie()
const posters = useImageMovie()
const link = useTrailerMovie()
const similars = useSimilarMovie()
const item = ref({})
const postersUrl = ref([])
const linkUrl = ref('')
const similarArr = ref([])
const isAllLoaded = ref(false)



const loadData = async (id) => {
  await filmInfo.getInfo(id)
  await budgets.getBudget(id)
  await posters.getPosters(id)
  await link.getTrailer(id)
  await similars.getSimilars(id)

  postersUrl.value = posters.poster
  linkUrl.value = link.trailer && link.trailer.url ? link.trailer.url : undefined;

  similarArr.value = similars.similar.map((similar) => ({
    id: similar.filmId,
    title: similar.nameRu,
    imgUrl: similar.posterUrlPreview
  }))

  item.value = {
    id: filmInfo.film.kinopoiskId,
    imgUrl: filmInfo.film.posterUrl,
    title: filmInfo.film.nameRu ? filmInfo.film.nameRu : 'null',
    rate:
      filmInfo.film.ratingKinopoisk !== null
        ? filmInfo.film.ratingKinopoisk.toString()
        : 'null',
    date: filmInfo.film.year,
    teg: filmInfo.film.genres.map((genre) => genre.genre).join(', '),
    text: filmInfo.film.description !=null ? filmInfo.film.description : 'null',
    age:
      filmInfo.film.ratingAgeLimits !== null
        ? filmInfo.film.ratingAgeLimits.slice(3)
        : 'null',
    critics:
      filmInfo.film.ratingRfCritics !== null
        ? filmInfo.film.ratingRfCritics
        : 'null',
    budget:
      budgets.budget === undefined
        ? 'null'
        : budgets.budget.amount + budgets.budget.symbol,
    time:
      filmInfo.film.filmLength !== null
        ? filmInfo.film.filmLength
        : 'null',
    country:
      filmInfo.film.countries[0].country !== null
        ? filmInfo.film.countries[0].country
        : 'null',
    isSeries: filmInfo.film.type === 'TV_SERIES'
  }
  isAllLoaded.value = true
}

onMounted(() => {
  loadData(route.params.id)
})

watch(
  () => route.params.id,
  (newId) => {
    isAllLoaded.value = false
    loadData(newId)
  }, { deep: true }
)
</script>

<template>
  <section v-if="isAllLoaded">
    <div class="mt-detail">
      <MovieDetail
        :id="item.id"
        :imgUrl="item.imgUrl"
        :text="item.text"
        :date="item.date"
        :info="item.info"
        :title="item.title"
        :rate="item.rate"
        :teg="item.teg"
        :age="item.age"
        :completed="item.completed"
        :critics="item.critics"
        :budget="item.budget"
        :time="item.time"
        :country="item.country"
        :isSeries="item.isSeries"
      />
    </div>

    <MovieScreenshots
      v-if="postersUrl.length > 3"
      :items="postersUrl"
      class="mt-detail2 max-w-[1300px] w-full sl:max-w-[1100px] sg:max-w-[900px] sb:max-w-[600px] ss:max-w-full"
    />

    <Mp4Player :Url="linkUrl" v-if="linkUrl"/>

    <div class="max-w-[1390px] w-full mx-auto mt-detail2 px-[15px]">
      <h3
        class="text-[#111827] font-semibold text-similar leading-[100%] mb-similarM"
      >
        Похожие на этот {{ item.isSeries ? 'сериал' : 'фильм' }}
      </h3>
      <Similars
        v-if="similarArr.length !== 0"
        :items="similarArr"
        class="w-[1300px]"
      />

      <div v-if="similarArr.length === 0">
        <h2 class="text-[30px] font-jost font-normal text-[#111827]">
          Ничего не найдено
        </h2>
      </div>
    </div>
  </section>

  <div v-else class="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-white z-50">
    <Loader />
  </div>
</template>
