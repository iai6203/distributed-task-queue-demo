import time

from .celery import app


@app.task
def large_task():
    time.sleep(5)

    return "OK"
