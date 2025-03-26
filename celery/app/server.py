from fastapi import FastAPI

from .routers import queue

app = FastAPI()

app.include_router(queue.router)
