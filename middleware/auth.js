export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    if (!userStore.token && to.path !== '/login' && to.path !== '/register') {
      return navigateTo('/login')
    }
})