# Twitter Applicaton Process.

The application consists of 3 processes:

- [`twitter-stream`]
- [`load-data`]
- [`api`]

#### Environment variables

- `NODE_ENV` : `development`
- `LOGGER_LEVEL` (`'debug' | 'info'`), default: `info`
- `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`
- `TWITTER_CONSUMER_KEY`
- `TWITTER_CONSUMER_SECRET`
- `TWITTER_ACCESS_TOKEN_KEY`
- `TWITTER_ACCESS_TOKEN_SECRET`
- `TWITTER_TRACK`: comma separated keywords to track, eg. `platzi,open source, etc`
- `RABBITMQ_URI`:`amqp://rabbitmq_service`
- `REDIS_URI`:`redis://redis_service`
- `REDIS_DATA_RETENTION_IN_MS`:`86400000`
- `PORT`: `3000`

## Docker Compose

Use the docker-compose file to be run.

```shell
docker-compose up -d
```

### Twitter stream

Listening on API twitter for keywords and sends the tweets to a RabbitMQ queue.

### Load Data

Listening on the RabbitMQ queue and saves the tweets to Redis.

### API

The process is serving an API in GraphQL to return the tweets.

- `http://localhost:3000`

- `Query to list tweets`

```shell
query {
  get(key:"tweets"){
    text
    tweeter
    createdAt
  }
}
```
