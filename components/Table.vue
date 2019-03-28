<template>
  <section>
    <b-table
      :data="data"
      :loading="loading"
      :total="totalPage"
      paginated
      @page-change="pageChange"
      backend-pagination
      :default-sort-direction="defalutSort"
      :default-sort="[sortField,sortSelect]"
      backend-sorting
      :per-page="parPage"
      @sort="sorTer"
    >
      <template slot-scope="props">
        <b-table-column
          width="200"
          field="original_title"
          label="Movie Title"
          sortable
        >
          <p class="title">{{props.row.original_title}}</p>
        </b-table-column>
        <b-table-column
          feild="vote_average"
          label="vote_average"
          numeric
          sortable
          centered
        >
          <span
            class="tag"
            :class="shadeof(props.row.vote_average)"
          >
            {{props.row.vote_average}}
          </span>
        </b-table-column>
        <b-table-column
          field="original_language"
          label="Lang"
        ><span class="tag is-dark ">{{props.row.original_language}}</span></b-table-column>
        <b-table-column
          field="release_date"
          label="release_date"
          sortable
          centered
        >{{props.row.release_date? new Date(props.row.release_date).toLocaleDateString():'Don`t have data'}}</b-table-column>
        <b-table-column
          label="Overview"

        >{{props.row.overview | cutText(80)}}</b-table-column>

        <b-table-column>        <nuxt-link :to="`/list/${props.row.id}`"><a  class="button is-primary is-outlined">More Detail</a>        </nuxt-link></b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: [],
      totalPage: 0,
      loading: false,
      sortField: 'vote_count',
      defalutSort: 'desc',
      sortSelect: 'desc',
      page: 1,
      cname: [],
      parPage: 20
    }
  },
  methods: {
    async getMovieData() {
      const params = [
        'api_key=45802feae9d98fc53bf0b8c6519d6230',
        'language=en-US',
        'include_video=false',
        `sort_by=${this.sortField}.${this.sortSelect}`,
        `page=${this.page}`
      ].join('&')
      this.loading = true
      await axios
        .get(`https://api.themoviedb.org/3/discover/movie?${params}`)
        .then(({ data }) => {
          this.data = []
          console.log(data)
          let currentTotalPage = data.total_results
          if (data.total_results / this.perPage > 1000) {
            currentTotalPage = this.parPage * 1000
          }
          this.totalPage = currentTotalPage
          data.results.forEach(mitem => {
            mitem.release_date = mitem.release_date.replace(/-/g, '/')
            this.data.push(mitem)
          })
          this.loading = false
        })
        .catch(err => {
          this.data = []
          this.total = 0
          this.loading = false
          throw err
        })
    },
    country(cname) {
      this.cname.push(cname)
      console.log(this.cname)
    },
    shadeof(average) {
      average = parseFloat(average)
      if (average < 5) {
        return 'is-danger'
      } else if (average >= 5 && average < 7) {
        return 'is-warning'
      } else if (average >= 7) {
        return 'is-success'
      }
    },
    pageChange(page) {
      this.page = page
      this.getMovieData()
    },
    sorTer(field, order) {
      this.sortField = field
      this.sortSelect = order
      this.getMovieData()
    },
    moreDetail(id){
      this.$router.push(`/list/${id}`)
    }
  },
  created() {
    this.getMovieData()
  },
  filters: {
    cutText(value, length) {
      return value.length > length ? value.substr(0, length) + '...' : value
    }
  }
}
</script>

<style scopped>
.tag {
  font-weight: bold;
}
.title {
  font-size: 15px;
  color: red;
  font-weight: bold;
}
</style>
