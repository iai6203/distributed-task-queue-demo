from fastapi import APIRouter

from app.celery.large.tasks import large_task


router = APIRouter()


@router.post("/enqueue")
def enqueue():
    large_task.delay()

    return {"message": "enqueued successfully"}
