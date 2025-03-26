from celery import Celery


app = Celery('large',
             broker='pyamqp://guest@localhost//',
             include=['app.celery.large.tasks'])

# Optional configuration, see the application user guide.
app.conf.update(
    result_expires=3600,
)

if __name__ == '__main__':
    app.start()
