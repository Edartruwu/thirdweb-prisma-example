import { z } from "zod";

export const basicUserData = z.object({
  name: z.string().optional(),
  userName: z.string().optional(),
  email: z.string().optional(),
});

export type BasicUserData = z.infer<typeof basicUserData>;
