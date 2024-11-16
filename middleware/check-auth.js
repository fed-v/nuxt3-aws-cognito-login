import { getCurrentUser } from 'aws-amplify/auth';

export default defineNuxtRouteMiddleware( async (to, from) => {

  // Try to get the current logged in user info or redirect to login page
  try {
    await getCurrentUser();
  } catch(error) {
    return navigateTo('/login');
  }

});