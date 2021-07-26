import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: '',
      name: '',
      categories: [],
      state: '',
      number: 0
    }
  },
  mutations: {
    load(state, payload){
      state.tasks = payload
    },
    set(state, payload) {
      state.tasks.push(payload)
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter( item => item.id !== payload)
    },
    task(state, payload) {
      if ( !state.tasks.find( item => item.id === payload) ) {
        router.push('/')
        return
      }
      state.task = state.tasks.find( item => item.id === payload)
    },
    update(state, payload) {
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    async loadLocalStorage({commit}) {
      try {
        const res = fetch('https://udemy-api-4bf27-default-rtdb.firebaseio.com/tasks.json');
        const dataBase = await res.json()
        const arrayTasks = [];
        // console.log(dataBase); return;
        console.log('Hola'); return;
        for (let id in dataBase){
          arrayTasks.push(dataDB[id]);
        }
        // commit('load', arrayTasks)
        console.log(arrayTasks)
      } catch (error) {
        // console.log(error)
      }
    },
    // use async to use await
    async setTasks({commit}, task) {
      try {
        // create an object to save the items in the database
        const res = await fetch(`https://udemy-api-4bf27-default-rtdb.firebaseio.com/tasks/${task.id}.json`, {
          method: 'PUT', // GET by default, use put for add an item
          // If use post, a random id is generated 
          // It's optional because firebase detects json and configures automatically
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        })

        // const dataBase = await res.json()
        
      } catch (error) {
        console.log(error)
      }
      commit('set', task)
    },
    async deleteTasks({commit}, id) {
      try {
        const res = fetch(`https://udemy-api-4bf27-default-rtdb.firebaseio.com/tasks/${id}.json`, {
          method: 'DELETE'
        })
        commit('delete', id)
      } catch (error) {
        console.log(error)
      }
    },
    setTask({commit}, id) {
      commit('task', id)
    },
    async updateTask({commit}, task) {
      try {
        const res = fetch(`https://udemy-api-4bf27-default-rtdb.firebaseio.com/tasks/${task.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(task)
        })
        const dataBase = await res.json()

      } catch (error) {
        console.log(error)
      }
      commit('update', task)
    }
  },
  modules: {
  }
})
