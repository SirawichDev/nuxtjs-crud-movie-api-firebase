<template>
  <b-table
    :data="data"
    :columns="columns"
  ></b-table>
</template>

<script>
export default {
  props: ['uMovie'],
  data() {
    return {
      data: this.uMovie,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '50',
          numeric: true
        },
        {
          field: 'mName',
          label: 'Movies Name'
        },
        {
          field: 'type',
          label: 'Movie Type'
        },
        {
          field: 'Overview',
          label: 'Overview',
          centered: true
        }
      ]
    }
  }
}
</script>
