import dotenv from "dotenv";
import { z } from "zod";

function getConfig() {
  const envSchema = z.object({
    CTFL_CDA_TOKEN: z.string().min(1),
    CTFL_SPACE_ID: z.string().min(1),
  });

  dotenv.config();

  const parsedEnv = envSchema.parse(process.env);

  return Object.freeze({
    contentful: {
      cdaToken: parsedEnv.CTFL_CDA_TOKEN,
      spaceId: parsedEnv.CTFL_SPACE_ID,
    },
  } as const);
}

export const config = getConfig();
