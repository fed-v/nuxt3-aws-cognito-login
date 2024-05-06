import { Auth } from 'aws-amplify';

export default defineNuxtRouteMiddleware( async (to, from) => {

    try {
      const user = await Auth.currentAuthenticatedUser();
    } catch(error) {
      return navigateTo('/login');
    }

});