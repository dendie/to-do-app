<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 All Rights Reserved.</span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a v-if="!token" href="/register" class="hover:underline me-4 md:me-6">Register</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const userStore = await useUserStore()

const token = userStore.token || process.client && localStorage.getItem("token")
</script>
