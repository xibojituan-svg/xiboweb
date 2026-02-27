import styles from "../../../../page.module.css";
import forumStyles from "../../../forum.module.css";
import Link from "next/link";
import { forumPosts } from "../../../forum-data";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = forumPosts.find((p) => p.id === id);
    if (!post) return { title: "未找到帖子 - 喜播论坛" };

    return {
        title: `${post.title}`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export function generateStaticParams() {
    return forumPosts.map((post) => ({
        id: post.id,
    }));
}

const basePath = "";

export default async function PostDetailPage({ params }: Props) {
    const { id } = await params;
    const postIndex = forumPosts.findIndex((p) => p.id === id);
    const post = forumPosts[postIndex];

    if (!post) return <div className="container" style={{ padding: "120px 0" }}>未找到帖子</div>;

    // 获取上一个和下一个
    const prevPost = postIndex > 0 ? forumPosts[postIndex - 1] : null;
    const nextPost = postIndex < forumPosts.length - 1 ? forumPosts[postIndex + 1] : null;

    // 获取相关文章（同分类下的其他文章）
    const relatedPosts = forumPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container" style={{ width: "100%" }}>
                    <nav className={styles.nav}>
                        <a href={`${basePath}/`} className={styles.logoText}>
                            <img src={`${basePath}/logo.png`} alt="喜播集团图标" className={styles.logoImg} />
                            <span>喜播集团</span>
                        </a>
                        <div className={styles.menu}>
                            <Link href="/education">喜播教育</Link>
                            <Link href="/health">喜播健康</Link>
                            <Link href="/vision">战略愿景</Link>
                            <Link href="/community">学员社群</Link>
                            <Link href="/about">关于我们</Link>
                        </div>
                        <a href="https://m.xibojiaoyu.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryNav}>
                            加入喜播
                        </a>
                    </nav>
                </div>
            </header>

            <main style={{ padding: "120px 0 80px", backgroundColor: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ marginBottom: 32 }}>
                        <Link href="/community/forum" style={{ color: '#64748b', fontSize: 14 }}>← 返回论坛列表</Link>
                    </div>

                    <article style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                            <span className={forumStyles.categoryTag}>{post.categoryLabel}</span>
                            <span style={{ fontSize: 14, color: '#94a3b8' }}>发布于 {post.date}</span>
                        </div>

                        <h1 style={{ fontSize: 32, fontWeight: 800, color: '#1a1a2e', marginBottom: 24, lineHeight: 1.3 }}>{post.title}</h1>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, border: '1px solid #e2e8f0' }}>
                                {post.authorAvatar}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, color: '#1a1a2e' }}>{post.author}</div>
                                <div style={{ fontSize: 12, color: '#64748b' }}>喜播实战学员 · {post.categoryLabel}</div>
                            </div>
                        </div>

                        <div
                            style={{ fontSize: 17, color: '#334155', lineHeight: 1.8 }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* 标签 */}
                        <div style={{ marginTop: 40, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {post.tags.map(tag => (
                                <span key={tag} style={{ padding: '4px 12px', background: '#f1f5f9', borderRadius: '100px', fontSize: 12, color: '#475569' }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid #f1f5f9', display: 'flex', gap: 24 }}>
                            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: '100px', border: '1px solid #e2e8f0', background: '#fff', fontSize: 14, fontWeight: 600, color: '#64748b', cursor: 'pointer' }}>
                                点赞 {post.likes}
                            </button>
                            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: '100px', border: '1px solid #e2e8f0', background: '#fff', fontSize: 14, fontWeight: 600, color: '#64748b', cursor: 'pointer' }}>
                                收藏
                            </button>
                            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: '100px', border: '1px solid #e2e8f0', background: '#fff', fontSize: 14, fontWeight: 600, color: '#64748b', cursor: 'pointer' }}>
                                分享
                            </button>
                        </div>
                    </article>

                    {/* 上下页导航 */}
                    <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                        {prevPost ? (
                            <Link href={`/community/forum/post/${prevPost.id}`} style={{ padding: '20px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none' }}>
                                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>← 上一篇</div>
                                <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{prevPost.title}</div>
                            </Link>
                        ) : <div />}
                        {nextPost ? (
                            <Link href={`/community/forum/post/${nextPost.id}`} style={{ padding: '20px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none', textAlign: 'right' }}>
                                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>下一篇 →</div>
                                <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{nextPost.title}</div>
                            </Link>
                        ) : <div />}
                    </div>

                    {/* 相关推荐 */}
                    {relatedPosts.length > 0 && (
                        <div style={{ marginTop: 48 }}>
                            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 20 }}>相关心得推荐</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                                {relatedPosts.map((rp) => (
                                    <Link key={rp.id} href={`/community/forum/post/${rp.id}`} style={{ background: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textDecoration: 'none' }}>
                                        <div style={{ fontSize: 12, color: 'var(--primary)', marginBottom: 8 }}>{rp.categoryLabel}</div>
                                        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', marginBottom: 10, lineHeight: 1.4 }}>{rp.title}</h4>
                                        <div style={{ fontSize: 13, color: '#64748b' }}>{rp.author} · {rp.date}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div style={{ marginTop: 48, background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 30 }}>评论区 ({post.comments})</h3>
                        <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8' }}>
                            目前暂无评论，快来抢沙发吧！
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <textarea
                                placeholder="写下你的想法..."
                                style={{ width: '100%', minHeight: '120px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: 14, outline: 'none' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
                                <button className={styles.btnPrimary} style={{ padding: '8px 24px', fontSize: 14 }}>发布评论</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer style={{ background: "#0d1f3c", padding: "48px 0 32px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 12 }}>
                        © 2026 喜播集团. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

