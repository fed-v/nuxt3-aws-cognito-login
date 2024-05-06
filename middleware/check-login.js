import { Auth } from 'aws-amplify';

export default defineNuxtRouteMiddleware( async (to, from) => {

    // Check if user is logged in already. If they are, they don't need to be in the login page.
    try {
        const user = await Auth.currentAuthenticatedUser();
        return navigateTo('/');
    } catch(error) {
        // If Authenticator fails, it's because user isn't logged in.
    }

});