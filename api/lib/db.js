import { neon } from '@neondatabase/serverless';


let sqlClient = null;
 
export function getSql() {

  const connectionString = process.env.DATABASE_URL || process.env.PORTFOLIO_URL;
 
  if (!connectionString) {
    throw new Error(
      'No database connection string found. Set DATABASE_URL (or PORTFOLIO_URL) in your Vercel project environment variables.'
    );
  }
  if (!sqlClient) {
    sqlClient = neon(connectionString);
  }
  return sqlClient;
}