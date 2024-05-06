<template>
    <div>
        <h1>Test</h1>
        <button class="link-btn" @click="signOut">Sign out</button>
    </div>
</template>

<script setup>

    definePageMeta({
        middleware: ['check-auth']
    });

    import { Auth } from 'aws-amplify';

    const signOut = async () => {

        await Auth.signOut().then( () => {
            navigateTo('/login');
        }).catch(error => { 
            console.log('error signing out: ', error);
        });

    };

</script>

<style lang="scss" scoped>

</style>