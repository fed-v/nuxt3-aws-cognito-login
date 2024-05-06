<template>

    <div>
        <h1>Test</h1>
        <button class="link-btn" @click="signOut">Sign out</button>

        <pre>{{ data }}</pre>
        
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


    const { data } = await useFetch('api/getUserData', {
        method: 'post',
        body: { limit: 5 }
    });

</script>

<style lang="less" scoped>

</style>