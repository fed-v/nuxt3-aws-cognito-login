<template>

    <main class="forms-page">
    
        <section class="form-section">

            <!-- You can remove 'prevent' from @submit.prevent when using Vee Validate -->
            <Form class="login-form" v-slot="{ errors }" @submit="onSubmit">

                <header>
                    <h3>Welcome! Please sign in to continue</h3>
                    <div class="signup-link">
                        <p>Don't have an account?</p>
                        <NuxtLink to="/signup" class="link-btn">Create an account</NuxtLink>
                    </div>
                </header>

                <div>
                    <FormsBaseInput type="email" label="email" name="email" rules="required|email" :error="{error : errors.email}" v-model="emailInputValue" />
                    <FormsBaseInput type="password" label="password" name="password" rules="required" :error="{error : errors.password}" />

                    <!-- This error message is in case of wrong email/password combo -->
                    <ErrorMessage class="error-msg" name="auth" />
                </div>

                <div class="checkbox-container">
                    <div>
                        <Field type="checkbox" class="checkbox-input" id="yes" value="yes" name="remember" aria-controls="" aria-describedby="" aria-checked="false" aria-invalid="false" />
                        <label class="input-label" for="yes">Remember me</label>
                    </div>
                    <NuxtLink to="/recover" class="link-btn">Forgot password?</NuxtLink>
                </div>

                <button class="solid-btn" type="submit" value="Login">Login</button>

                <!--<SeparatorComponent>or</SeparatorComponent>

                <button class="outline-btn" type="submit" value="">Sign in with Google</button>-->

            </Form>

        </section>

    </main>

</template>

<script setup>

    definePageMeta({
        middleware: ['check-login']
    });


    import { Auth } from 'aws-amplify';


    // Set the input value to the value saved in the cookie if it's set
    const emailInputValue = useCookie('email').value;


    const onSubmit = async (values, actions) => {

       const user = await Auth.signIn(values.email, values.password).then( () => {

            // SET LOGIN COOKIE IF "REMEMBER ME" IS CHECKED
            if(values.remember === 'yes') {
                const userEmail = useCookie('email');
                userEmail.value = values.email;
            }

            return navigateTo('/');

        }).catch(error => { 

            console.log('error signing in: ', error);
            actions.setFieldError('auth', 'The email or password you entered is incorrect');
            return null;

        });

    }

</script>

<style lang="less" scoped>

    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';
    
    .signup-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>