import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email("Please provide a valid email").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});
