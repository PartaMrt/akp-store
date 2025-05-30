import { z } from 'zod';
import { router, publicProcedure } from '@repo/trpc'
import { AuthService } from '../application/AuthService';

const usecase = new AuthService();

export const authRoutes = router({
  login: publicProcedure
    .input(z.object({
      username: z.string(),
      password: z.string(),
    }))
    .mutation(async ({ input }) => {
      const { username, password } = input;
      return await usecase.login(username, password);
    }),

});