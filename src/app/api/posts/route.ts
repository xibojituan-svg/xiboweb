export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
    try {
        const posts = await query<{
            id: number; title: string; content: string; excerpt: string;
            categoryLabel: string; isHot: number; isNew: number; author: string;
            authorAvatar: string; views: number; likes: number; comments: number;
            createdAt: string; updatedAt: string;
        }>('SELECT * FROM Post ORDER BY createdAt DESC');
        return NextResponse.json(posts);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, content, categoryLabel, isHot, isNew, author, authorAvatar } = body;

        if (!title || !content) {
            return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
        }

        const excerpt = body.excerpt || content.substring(0, 100);

        const [result] = await (await import('@/lib/db')).pool.execute(
            'INSERT INTO Post (title, content, excerpt, categoryLabel, isHot, isNew, author, authorAvatar, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())',
            [title, content, excerpt, categoryLabel || '默认', isHot ? 1 : 0, isNew !== undefined ? (isNew ? 1 : 0) : 1, author || '匿名用户', authorAvatar || '👤']
        );

        const insertId = (result as { insertId: number }).insertId;
        const [post] = await (await import('@/lib/db')).pool.execute('SELECT * FROM Post WHERE id = ?', [insertId]);
        return NextResponse.json((post as unknown[])[0], { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
