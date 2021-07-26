<template>
    {{tasks}}
  <table class="table">
  <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">State</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in tasks" :key="item.id">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td >
          <span v-for="(cat, index) in item.categories" :key="index">
              {{
                  item.categories.length === index + 1 ? cat : cat + ', '
              }}
          </span>
        </td>
        <td>{{item.state}}</td>
        <td>{{item.number}}</td>
        <td>
          <router-link
            class="btn btn-warning mr-2 btn-sm"
            :to="{
              name: 'Edit',
              params: {
                id: item.id
              }
            }"
          >
            Edit
          </router-link>
          <!-- button is inside the for so it's assigned the id -->
          <button 
            class="btn btn-danger btn-sm"
            @click="deleteTasks(item.id)"
          >
            Delete
          </button>
        </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
      ...mapActions(['deleteTasks'])
    }
}
</script>
