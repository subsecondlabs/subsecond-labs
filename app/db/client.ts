import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

type DbContext = {
  db: ReturnType<typeof drizzle>
  client: postgres.Sql
}

export const createDb = (): DbContext | null => {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    return null
  }

  const client = postgres(connectionString, { prepare: false })
  const db = drizzle(client)
  return { db, client }
}
