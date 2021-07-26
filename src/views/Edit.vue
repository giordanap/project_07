<template>
  Edit {{ $route.params.id}} - {{task}}
  <form @submit.prevent="updateTask(task)">
    <Input :task="task" />
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Input from '../components/Input.vue'
import router from '../router'

export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['task'])
    },
    methods: {
        ...mapActions(['setTask','updateTask'])
    },
    created() {
        this.setTask(this.$route.params.id)
    }
}
</script>
