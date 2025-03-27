# 분산 작업 큐

## 기술 스택

- Next.js
- BullMQ
- Docker

## 시작하기

패키지 설치:

```shell
npm install
```

환경 변수:

`.env.example` 파일을 복사하여 `.env.local` 파일을 생성합니다.  
내용은 변경할 필요 없습니다.

Redis 실행:

```shell
docker compose -f .devcontainer/docker-compose.yml up -d
```

Worker 실행:

```shell
npm run worker:start
```

API 서버 실행:

```shell
npm run dev
```

테스트 API 실행:

```shell
curl -X POST http://localhost:3000/api/enqueue
```

## 참고

- [BullMQ 공식 문서](https://docs.bullmq.io/)
