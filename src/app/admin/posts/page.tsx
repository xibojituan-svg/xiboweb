"use client";
import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";

// NOTE: Since the post interface is exactly schema, we replicate it here
interface Post {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    categoryLabel: string;
    isHot: boolean;
    isNew: boolean;
    author: string;
    authorAvatar: string;
    createdAt: string;
}

export default function AdminPostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingPost, setEditingPost] = useState<Partial<Post>>({});

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/posts");
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("确定删除该帖子吗？")) return;
        await fetch(`/api/posts/${id}`, { method: "DELETE" });
        fetchPosts();
    };

    const handleEdit = (post: Post) => {
        setEditingPost(post);
        setIsEditing(true);
    };

    const handleCreateNew = () => {
        setEditingPost({ title: "", content: "", categoryLabel: "变现心得", isHot: false, isNew: true, author: "喜播导师" });
        setIsEditing(true);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = editingPost.id ? "PUT" : "POST";
        const url = editingPost.id ? `/api/posts/${editingPost.id}` : "/api/posts";

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingPost)
        });

        setIsEditing(false);
        fetchPosts();
    };

    if (isLoading) return <div className={styles.loading}>加载中...</div>;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1>喜播内管 - 论坛帖子管理</h1>
                    <p>管理社群版块所有的热门和干货发文</p>
                </div>
                <button className={styles.btnCreate} onClick={handleCreateNew}>+ 新增帖子</button>
            </header>

            <div className={styles.contentCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>标题</th>
                            <th>分类标签</th>
                            <th>作者</th>
                            <th>HOT/NEW</th>
                            <th>发布时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(p => (
                            <tr key={p.id}>
                                <td>#{p.id}</td>
                                <td className={styles.cellTitle} title={p.title}>{p.title}</td>
                                <td><span className={styles.tag}>{p.categoryLabel}</span></td>
                                <td>{p.author}</td>
                                <td>
                                    {p.isHot && <span className={styles.badgeHot}>HOT</span>}
                                    {p.isNew && <span className={styles.badgeNew}>NEW</span>}
                                </td>
                                <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <button className={styles.btnAction} onClick={() => handleEdit(p)}>📝 编辑</button>
                                    <button className={`${styles.btnAction} ${styles.danger}`} onClick={() => handleDelete(p.id)}>🗑️ 删除</button>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan={7} style={{ textAlign: "center", padding: "40px" }}>暂无帖子，请点击右上角新增</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isEditing && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2>{editingPost.id ? "编辑帖子" : "发布新帖子"}</h2>
                            <button className={styles.btnClose} onClick={() => setIsEditing(false)}>✕</button>
                        </div>
                        <form className={styles.form} onSubmit={handleSave}>
                            <div className={styles.formGroup}>
                                <label>帖子标题</label>
                                <input required value={editingPost.title || ''} onChange={e => setEditingPost({ ...editingPost, title: e.target.value })} placeholder="输入引人注目的标题..." />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>分类标签</label>
                                    <input value={editingPost.categoryLabel || ''} onChange={e => setEditingPost({ ...editingPost, categoryLabel: e.target.value })} placeholder="例如：变现心得" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>作者</label>
                                    <input value={editingPost.author || ''} onChange={e => setEditingPost({ ...editingPost, author: e.target.value })} placeholder="例如：喜播导师" />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>帖子内容 / 正文</label>
                                <textarea required rows={5} value={editingPost.content || ''} onChange={e => setEditingPost({ ...editingPost, content: e.target.value })} placeholder="输入正文..."></textarea>
                            </div>
                            <div className={styles.formGroup}>
                                <label>列表摘要（不填将自动提取前100字）</label>
                                <textarea rows={2} value={editingPost.excerpt || ''} onChange={e => setEditingPost({ ...editingPost, excerpt: e.target.value })} placeholder=""></textarea>
                            </div>
                            <div className={styles.formCheck}>
                                <label><input type="checkbox" checked={editingPost.isHot || false} onChange={e => setEditingPost({ ...editingPost, isHot: e.target.checked })} /> 设为 HOT</label>
                                <label><input type="checkbox" checked={editingPost.isNew ?? true} onChange={e => setEditingPost({ ...editingPost, isNew: e.target.checked })} /> 设为 NEW</label>
                            </div>
                            <div className={styles.modalFooter}>
                                <button type="button" className={styles.btnCancel} onClick={() => setIsEditing(false)}>取消</button>
                                <button type="submit" className={styles.btnSubmit}>保存发布</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
