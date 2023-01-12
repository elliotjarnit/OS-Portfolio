import { inject } from '@vercel/analytics';

export default defineNuxtPlugin((NuxtApp) => {
  // Inject Vercel analytics
  inject();
})
