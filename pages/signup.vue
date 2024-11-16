<template>
    <main class="forms-page">
    
        <section class="form-section">

            <!-- Create New User Form -->
            <Form class="login-form" v-slot="{ errors }" @submit="onSubmit" v-if="success === false">

                <header class="form-header">
                    <h3>Create new User</h3>
                    <NuxtLink to="/login" class="link-btn">Back</NuxtLink>
                </header>
                
                <FormsBaseInput type="email" label="email" name="email" rules="required|email" :error="{error : errors.email}" />
                <FormsBaseInput type="password" label="password" name="password" rules="required" :error="{error : errors.password}" />

                <!-- This error message is in case of wrong email/password combo -->
                <ErrorMessage class="error-msg" name="auth" />

                <button class="solid-btn" type="submit">Create account</button>

            </Form>

            <div class="success-msg" v-if="success === true">
                <h3>New user created</h3>
                <p>Please check your email to confirm new user.</p>
                <NuxtLink class="link-btn" to="/login">Login</NuxtLink>
            </div>

        </section>

    </main>
</template>

<script setup>

    /*definePageMeta({
        middleware: ['check-login']
    });


    import { ref } from 'vue';
    import { Auth } from 'aws-amplify';


    // Create a dynamic ref to use as a flag. Initial value is 'false'
    const success = ref(false);


    async function onSubmit(values, actions) {

        const user = await Auth.signUp(values.email, values.password).then( () => {

            success.value = true;

        }).catch(error => { 

            console.log('error signing up: ', error);
            actions.setFieldError('auth', 'There was a problem with your request. Please try again later.');
            return null;

        });

    }*/

</script>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';

</style>