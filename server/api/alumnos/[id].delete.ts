export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const storage = useStorage();
  const exists = await storage.hasItem(`alumno:${id}`);
  if (!exists) {
    setResponseStatus(event, 404);
    return {
      message: "Not found",
    };
  }
  await useStorage().removeItem(`alumno:${id}`);
  return {
    id,
  };
});
