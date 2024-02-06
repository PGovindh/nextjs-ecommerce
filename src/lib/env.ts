import zod from 'zod';

const envSchema = zod.object({
    DATABASE_URL: zod.string(),
    GOOGLE_CLIEND_ID: zod.string(),
    GOOGLE_CLIENT_SECRET: zod.string(),
    NEXT_AUTH_URL: zod.string(),
    NEXT_AUTH_SECRET: zod.string(),
});

export const env = envSchema.parse(process.env)