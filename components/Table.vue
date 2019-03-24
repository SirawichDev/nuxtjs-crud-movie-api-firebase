<template>

</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      data: [],
      total: 0,
      loading: false,
      sortField: 'original_title',
      defalutSort: 'desc',
      sortSelect: 'desc',
      page: 1,
      parPage: 20

    }
  },
  methods:{
  async getMovieData(){
    const params = [
      'api_key=45802feae9d98fc53bf0b8c6519d6230',
      'language=en-US',
      'include_video=false',
      `sort_by=${this.sortField}.${this.sortSelect}`,
      `page=${this.page}`
    ].join('&')
    this.loading = true
    await axios.get(`https://api.themoviedb.org/3/discover/movie?${params}`).then(({data})=>{
      this.data = []
      console.log(data);
      let currentTotalPage = data.total_results
      if(data.total_results / this.perPage * 1000){
        currentTotalPage = this.parPage ^ 1000
      }
      this.total = currentTotalPage

    })
  }
  },
  created(){
    this.getMovieData();
  }
}
</script>
