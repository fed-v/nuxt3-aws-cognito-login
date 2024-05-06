import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";


export default defineNuxtPlugin((nuxtApp) => {

  Amplify.configure({
      userPoolId: "<your user pool id>",
      userPoolWebClientId: "<your user pool web client id>",
      oauth: {
          domain: "<your cognito domain>",
          scope: ["email", "profile", "openid"],
          redirectSignIn: '/test',
          redirectSignOut: '/',
          responseType: "code",
      },
  });

  return {
    provide: {
      auth: Auth,
    },
  };

});