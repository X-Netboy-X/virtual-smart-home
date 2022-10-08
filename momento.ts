import { SimpleCacheClient, CacheGetStatus } from '@gomomento/sdk'

let client = null

export async function getMomentoClient() {
  if (client) {
    return client
  }

  client = new SimpleCacheClient(process.env.MOMENTO_TOKEN, 3600, {
    requestTimeoutMs: 1500,
  })

  return client
}

export { CacheGetStatus }