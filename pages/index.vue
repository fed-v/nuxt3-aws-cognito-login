<template>

    <div>

        <h1>Test</h1>

        <button class="link-btn" @click="signOut">Sign out</button>


        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Nationality</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td>{{ item.name.title }} {{ item.name.first }} {{ item.name.last }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.location.street.number }} {{ item.location.street.name }}, {{ item.location.city }}, {{ item.location.country }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.nat }}</td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<script lang="ts" setup>

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


    // Source: https://nuxt.com/docs/api/composables/use-fetch
    const { data } = await useFetch('api/getUserData',  {
        method: 'post', // Post the limit variable to the server
        body: { limit: 5 }, // Set the limit variable in the body of the request
    });
    
</script>

<style scoped>

    /* Reset default margin and padding */
    body, table {
        margin: 0;
        padding: 0;
    }

    /* Style the table */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
    }

    /* Style the table header */
    th {
        background-color: #f2f2f2;
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    /* Style the table body row */
    td {
        padding: 12px;
        border-bottom: 1px solid #ddd;
    }

    /* Alternate row background color */
    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    /* Hover effect on rows */
    tr:hover {
        background-color: #e2f2ff;
    }

</style>