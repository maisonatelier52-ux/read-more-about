// lib/mongodb.js
import { MongoClient } from 'mongodb';

const dbName = process.env.MONGODB_DB || 'read_more_about';

// Connect lazily (on first request), NOT at import time.
// Next.js imports every route during `next build`, and env vars may not be
// needed/available then. Checking inside getDb() keeps the build from failing.
function getClientPromise() {
  if (!global._rmaMongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        'Missing MONGODB_URI environment variable. Add it in Vercel → Project Settings → Environment Variables (or .env.local for local dev).'
      );
    }
    const client = new MongoClient(uri);
    global._rmaMongoClientPromise = client.connect().catch((err) => {
      global._rmaMongoClientPromise = undefined; // allow retry after a failed connect
      throw err;
    });
  }
  return global._rmaMongoClientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(dbName);
}