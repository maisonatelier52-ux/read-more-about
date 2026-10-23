// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'read_more_about';

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable. Add it to .env.local');
}

// Re-use one connection across hot reloads (dev) and requests (prod)
if (!global._rmaMongoClientPromise) {
  const client = new MongoClient(uri);
  global._rmaMongoClientPromise = client.connect();
}

export async function getDb() {
  const client = await global._rmaMongoClientPromise;
  return client.db(dbName);
}
