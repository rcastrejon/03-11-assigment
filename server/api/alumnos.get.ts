export default defineEventHandler(async () => {
  const storage = useStorage();
  const keys = await storage.getKeys("alumno");
  return storage.getItems(keys).then((list) => list.map((i) => i.value));
});
