import { Redis } from "@upstash/redis"
import * as dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL as string,
    token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

