import mysql from 'mysql2/promise';

const globalForDb = globalThis as unknown as {
    pool: mysql.Pool | undefined
};

function createPool() {
    const dbUrl = new URL(process.env.DATABASE_URL as string);
    return mysql.createPool({
        host: dbUrl.hostname,
        port: Number(dbUrl.port) || 3306,
        user: dbUrl.username,
        password: dbUrl.password,
        database: dbUrl.pathname.slice(1),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
}

export const pool =
    globalForDb.pool ??
    createPool();

if (process.env.NODE_ENV !== 'production') globalForDb.pool = pool;

// Query helper
export async function query<T = unknown>(sql: string, params?: unknown[]): Promise<T[]> {
    const [rows] = await pool.execute(sql, params);
    return rows as T[];
}

export async function queryOne<T = unknown>(sql: string, params?: unknown[]): Promise<T | null> {
    const rows = await query<T>(sql, params);
    return rows[0] ?? null;
}
