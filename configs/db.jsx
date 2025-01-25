// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL)
export const db = drizzle(sql);
 

