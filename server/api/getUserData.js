export default defineEventHandler(async (event) => {

    // Handle Post data
    const { limit } = await readBody(event);

    // Get API with private key
    const { results } = await $fetch('https://randomuser.me/api/?results=' + limit);
    
    return {
        results
    }

})