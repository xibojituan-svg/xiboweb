export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const [rows] = await pool.execute('SELECT * FROM Post WHERE id = ?', [id]);
        const posts = rows as unknown[];
        if (!posts[0]) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json(posts[0]);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to get post' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { title, content, excerpt, categoryLabel, isHot, isNew, author, authorAvatar } = body;

        await pool.execute(
            'UPDATE Post SET title=?, content=?, excerpt=?, categoryLabel=?, isHot=?, isNew=?, author=?, authorAvatar=?, updatedAt=NOW() WHERE id=?',
            [title, content, excerpt, categoryLabel, isHot ? 1 : 0, isNew ? 1 : 0, author, authorAvatar, id]
        );

        const [rows] = await pool.execute('SELECT * FROM Post WHERE id = ?', [id]);
        return NextResponse.json((rows as unknown[])[0]);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await pool.execute('DELETE FROM Post WHERE id = ?', [id]);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
}
