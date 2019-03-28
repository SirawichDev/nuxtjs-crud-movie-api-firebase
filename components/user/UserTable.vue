<template>

  <section>

    <b-table
      :data="data"
      :total="data.length"
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
          <p class="title">{{props.row.mName}}</p>
        </b-table-column>
        <b-table-column
          feild="type"
          label="type"
          numeric
          sortable
          centered
        >
          <span
            class="tag"
            :class="typer(props.row.type)"
          >
            {{props.row.type}}
          </span>
        </b-table-column>
        <b-table-column label="Overview">{{props.row.Overview | cutText(80)}}</b-table-column>
        <b-table-column>
          <nuxt-link :to="`/user/editM/${props.row.id}`">
            <a class="button is-primary is-outlined">Edit</a>
          </nuxt-link>
          <a
            @click="$emit('delete',props.row.id)"
            class="button is-primary is-danger"
          >Delete</a>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['uMovie'],
  data() {
    return {
      data: this.uMovie,
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
  computed: {
    ...mapGetters(['movie'])
  },
  methods: {
    typer(tmovie) {
      if (tmovie === 'Action') {
        return 'is-danger'
      } else if (tmovie === 'Science Fiction') {
        return 'is-info'
      } else if (tmovie === 'Thriller') {
        return 'is-warning'
      } else if (tmovie === 'Adventure') {
        return 'is-success'
      } else if (tmovie === 'Drama') {
        return 'is-dark'
      } else if (tmovie === 'Crime') {
        return 'has-background-grey-light'
      } else if (tmovie === 'Horror') {
        return 'is-primary'
      }
    },
       sorTer(field, order) {
      this.sortField = field
      this.sortSelect = order
      this.getMovieData()
    },
       pageChange(page) {
      this.page = page
      this.getMovieData()
    },
  },
  filters: {
    cutText(value, length) {
      return value.length > length ? value.substr(0, length) + '...' : value
    }
  }
}
</script>
