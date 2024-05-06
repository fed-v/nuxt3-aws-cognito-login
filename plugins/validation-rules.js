import { defineRule } from 'vee-validate';


export default defineNuxtPlugin((nuxtApp) => {

    defineRule('required', value => {

        if (!value || !value.length) {
            return 'This field is required';
        }
        return true;

    });

    defineRule('email', value => {

        /*if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
          return 'This field must be a valid email';
        }*/
        return true;

    });

    return {
        provide: {
            required: 'required',
            email: 'email',
        },
    };

});