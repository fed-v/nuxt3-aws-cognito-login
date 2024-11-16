import { getCurrentUser } from 'aws-amplify/auth';

export default defineNuxtRouteMiddleware( async (to, from) => {

    // Check if user is logged in already. If they are, they don't need to be in the login page.
    try {
        await getCurrentUser();
        return navigateTo('/');
      } catch(error) {
        // If Authenticator fails, it's because user isn't logged in.
      }

});