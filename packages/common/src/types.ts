import { z } from "zod";

export const CreateUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
})

export const siginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const CreateRoomSchema = z.object({
    name: z.string(),
})