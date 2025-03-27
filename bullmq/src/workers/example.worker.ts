import { Queue, Worker } from "bullmq"
import Redis from "ioredis"
import { z } from "zod"

const config = z
  .object({
    host: z.string().min(1),
    port: z.preprocess(Number, z.number()),
  })
  .parse({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  })

const connection = new Redis({
  host: config.host,
  port: config.port,
  maxRetriesPerRequest: null,
})

const exampleQueue = new Queue("example", { connection })

const worker = new Worker(
  "example",
  async (args: unknown) => {
    const validatedArgs = z.object({ data: z.any() }).passthrough().parse(args)

    console.log("데이터: ", validatedArgs.data)

    return { result: "결과" }
  },
  {
    connection,
    concurrency: 2,
  }
)

worker.on("completed", (data) => {
  console.log("결과", data.returnvalue)
})

export { exampleQueue }
