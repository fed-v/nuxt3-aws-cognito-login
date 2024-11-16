<template>
    <main class="forms-page">
    
        <section class="form-section">

            <!-- Send Code Form -->
            <Form class="login-form" v-slot="{ errors }" @submit="onSubmit" v-if="success === false">

                <header class="form-header">
                    <h3>Recover password</h3>
                    <NuxtLink to="/login" class="link-btn">Back</NuxtLink>
                </header>

                <div>
                    <FormsBaseInput type="email" label="email" name="email" rules="required|email" :error="{error : errors.email}" />

                    <!-- This error message is in case of wrong email/password combo -->
                    <ErrorMessage class="error-msg" name="auth" />
                </div>

                <button class="solid-btn" type="submit">Submit</button>

            </Form>

            <!-- Reset Password Form -->
            <Form class="login-form" v-slot="{ errors }" @submit="onSubmit" v-if="success === true">

                <header class="form-header">
                    <h3>Reset password</h3>
                    <NuxtLink to="/login" class="link-btn">Back</NuxtLink>
                </header>
                
                <div>
                    <FormsBaseInput type="text" label="code" name="code" rules="required" :error="{error : errors.email}" />
                </div>
    
                <FormsBaseInput type="password" label="New Password" name="newPassword" rules="required" :error="{error : errors.newPassword}" />
                <FormsBaseInput type="password" label="Confirm Password" name="confirmPassword" rules="required" :error="{error : errors.confirmPassword}" />
    
                <button class="solid-btn" type="submit" value="Submit">Submit</button>

            </Form>

        </section>

    </main>
</template>

<script setup>

    definePageMeta({
        middleware: ['check-login']
    });

    import { resetPassword } from "aws-amplify/auth"

    // Create a dynamic ref to use as a flag. Initial value is 'false'
    const success = ref(false);


    /*
    async function onSubmit(values) {

        if(success.value === false) {

            success.value = true;
            
           
        } else {
            

            console.log("second submit");
        } 

    }*/

</script>

<style lang="less" scoped>

    /* This should be a global import declared in the nuxtconfig file */
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';

</style>