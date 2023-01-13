export default defineEventHandler(async (event) => {
  throw createError({
    statusCode: 503,
    name: 'NotImplementedError',
    message: 'This endpoint is not implemented yet.',
    statusMessage: "Not Implemented",
  })
});
