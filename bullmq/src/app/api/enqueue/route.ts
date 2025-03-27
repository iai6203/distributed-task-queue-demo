import { exampleQueue } from "@/workers/example.worker"

export async function POST() {
  try {
    await exampleQueue.add("example", { foo: "bar" })

    return Response.json({ message: "작업 등록" })
  }
  catch (error) {
    console.error(error)
    return Response.json(
      { message: "INTERNAL_SERVER_ERROR" },
      { status: 500 },
    )
  }
}
