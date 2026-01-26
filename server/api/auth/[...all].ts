import { createAuth } from '@/utils/auth';

export default defineEventHandler(async (event) => {
  const auth = await createAuth();
  return auth.handler(toWebRequest(event));
});

