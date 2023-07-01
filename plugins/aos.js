import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init({
      delay: 500,
      duration: 1000,
      easing: 'ease-in-out',
    })
  }
})
