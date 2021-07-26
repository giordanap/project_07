<template>
  <!-- submit receive a method -->
  <!-- The method print to console, but is hidden because submit use get and therefore the memory is refreshed -->
  <!-- with prevent will no longer refresh by default -->
  <form @submit.prevent="processForm">
    
    <!-- in Bootstrap can use mt-5 mb-5 or my-5 -->
    <h1 class="my-5" >Form with Vue.js</h1>
    <Input :task="task"/>
  </form>
  <hr>
  <ListTasks />

</template>

<script>
import Input from '../components/Input.vue'
import ListTasks from '../components/ListTasks.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid'); // call ids


export default {
  name: 'Home',
  components: {
    Input, ListTasks
  },
  data() {
    return {
      task: {
        id: '',
        name: '',
        categories: [],
        state: '',
        number: 0
      },
      disabled: true
    }
  },
  methods: {
    ...mapActions(['setTasks']),
    processForm() {
      // Here send the data
      console.log(this.task)
      // validation to detect empty fields
      if (this.task.name.trim() === "") {
        console.log('empty field')
        return
      }
      // console.log("it is not empty")

      // generate id
      this.task.id = shortid.generate()
      console.log(this.task.id)

      // send data
      this.setTasks(this.task)

      // Here clean the data
      this.task = {
        id : '',
        name: '',
        categories: [],
        state: '',
        number: 0
      }
    }
  }
}
</script>
