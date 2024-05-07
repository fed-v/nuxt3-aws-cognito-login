export default defineEventHandler(async (event) => {

    // Handle Post data
    const { limit } = await readBody(event);

    // Get API with limit query
    const { results } = await $fetch('https://randomuser.me/api/?results=' + limit);

    return results;

})