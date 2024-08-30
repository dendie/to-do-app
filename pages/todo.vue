<template>
    <div class="p-4 flex-grow p-4">
      <div class="space-y-12">
        <h1 class="text-base font-semibold leading-7 text-gray-900">Your To-Dos</h1>
        <ul>
          <li v-for="todo in todoStore.todos" :key="todo._id">
            <div class="flex flex-col">
              <span :style="{ textDecoration: todo.status === 'Done' ? 'line-through' : 'none' }" class="mr-2">
                {{ todo.subject }}
              </span>
              <div>
                <button @click="toggleDone(todo)" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2">Toggle Done</button>
                <button @click="edit(todo)" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2">Edit</button>
                <button @click="remove(todo._id)" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
              </div>
            </div>
          </li>
        </ul>
        <form @submit.prevent="addTodo">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="subject" class="block text-sm font-medium leading-6 text-gray-900">Subject</label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input v-model="subject" type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Subject" />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div class="mt-2">
                <textarea v-model="description" id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Write a to-do description.</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add To-Do</button>
          </div>
        </form>
      </div>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  import { useTodoStore } from '~/stores/todo'
  import { useUserStore } from '~/stores/user'
  
  const todoStore = useTodoStore()
  const userStore = useUserStore()
  const subject = ref('')
  const description = ref('')
  
  onMounted(async () => {
    await userStore.setToken()
    await userStore.getUser()
    await todoStore.fetchTodos()
  })
  
  function addTodo() {
    todoStore.addTodo({ subject: subject.value, description: description.value })
    subject.value = ''
    description.value = ''
  }
  
  function toggleDone(todo) {
    const status = todo.status === 'Done' ? 'Unmarked' : 'Done'
    todoStore.updateTodo(todo._id, { status })
  }
  
  function edit(todo) {
    const newSubject = prompt('Enter new subject:', todo.subject)
    const newDescription = prompt('Enter new description:', todo.description)
    if (newSubject && newDescription) {
      todoStore.updateTodo(todo._id, { subject: newSubject, description: newDescription })
    }
  }
  
  function remove(id) {
    todoStore.deleteTodo(id)
  }
</script>
  