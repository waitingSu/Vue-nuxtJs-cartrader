export default async (id) => {
    const { data, error } = await useFetch(`/api/car/${id}`);

    console.log(error.value.statusMessage)
    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode,
            statusMessage: error.value.statusMessage
        });
    }

    return { data };
};