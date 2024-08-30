// stores/todo.ts
import { defineStore } from 'pinia'
import { useUserStore } from '~/stores/user'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos() {
      const { $api } = useNuxtApp()
      try {
        const { data } = await $api.get('/todos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.todos = data
      } catch (error) {
        console.error('Fetching todos failed:', error)
      }
    },
    async addTodo(todo: { subject: string, description: string }) {
      const { $api } = useNuxtApp()
      try {
        const { data } = await $api.post('/todos', todo, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.todos.push(data)
      } catch (error) {
        console.error('Adding todo failed:', error)
      }
    },
    async updateTodo(id: string, update: { subject?: string, description?: string, status?: string }) {
      const { $api } = useNuxtApp()
      try {
        const { data } = await $api.put(`/todos/${id}`, update, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const index = this.todos.findIndex(todo => todo._id === id)
        this.todos[index] = data
      } catch (error) {
        console.error('Updating todo failed:', error)
      }
    },
    async deleteTodo(id: string) {
      const { $api } = useNuxtApp()
      try {
        await $api.delete(`/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.todos = this.todos.filter(todo => todo._id !== id)
      } catch (error) {
        console.error('Deleting todo failed:', error)
      }
    }
  }
})