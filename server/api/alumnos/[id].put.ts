import { AlumnoSchema } from "../../../utils/schemas/alumno";

export default defineEventHandler(async (event) => {
  const storage = useStorage();

  const id = getRouterParam(event, "id");
  const exists = await storage.hasItem(`alumno:${id}`);
  if (!exists) {
    setResponseStatus(event, 404);
    return {
      message: "Not found",
    };
  }

  const body = await readValidatedBody(event, AlumnoSchema.parse);
  await useStorage().setItem(`alumno:${id}`, body);
  return body;
});
