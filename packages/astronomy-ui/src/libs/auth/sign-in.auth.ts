import { PrismaClient } from '@prisma/client';
import type { APIRoute } from 'astro';
import { generateTokens } from './core.auth';

const prisma = new PrismaClient();

interface SignInBody {
  email: string;
  password: string;
}

export const post: APIRoute = async ({ request }) => {
  const body: SignInBody = await request.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && await Bun.password.verify(password, user.password)) {
    const { accessToken, refreshToken } = generateTokens(user);
    return new Response(JSON.stringify({ accessToken, refreshToken }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
    status: 401,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};