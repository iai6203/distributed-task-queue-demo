# 분산 작업 큐

## 기술 스택

- python
- uv
- celery
- docker

## 시작하기

가상 환경 구성 및 실행:

```shell
uv venv
source .venv/bin/activate
```

RabbitMQ 실행:

```shell
docker compose -f .devcontainer/docker-compose.yml up -d
```

Worker 실행:

```shell
uv run celery -A app.celery.large worker -l INFO
```

## 참고

- [Celery Document](https://docs.celeryq.dev/)
