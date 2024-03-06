import { z } from "zod";

export const AlumnoSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string().trim().min(1),
  matricula: z.string().trim().min(1),
});

export type Alumno = z.infer<typeof AlumnoSchema>;
