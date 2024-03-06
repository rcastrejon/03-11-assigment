import { AlumnoSchema } from "../../utils/schemas/alumno";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, AlumnoSchema.parse);
  await useStorage().setItem(`alumno:${body.id}`, body);
  return body;
});
