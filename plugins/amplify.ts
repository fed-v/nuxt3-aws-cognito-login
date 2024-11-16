import { Amplify } from 'aws-amplify';
import { defineNuxtPlugin } from '#app';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-west-2_dGfr7NRQy',
      userPoolClientId: '3n2anm6qlg5d0nbdp07fb3s0ua',
      identityPoolId: 'us-west-2:2dc23b95-2375-4eab-bec7-e86526bb86f0',
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: 'code',
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('amplify', Amplify);
});