<template>
  <div>
    <h1>List User</h1>
    <template v-if="userStore.user && userStore.user.length > 0">
      <ul>
        <li v-for="user in userStore.user" :key="user._id">
          <span>
            {{ user.name }}
          </span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useUserStore } from '~/stores/user'

  const userStore = useUserStore()

  onMounted(() => {
    userStore.getUser()
  })
</script>
