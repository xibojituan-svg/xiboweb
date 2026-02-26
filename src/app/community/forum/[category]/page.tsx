import styles from "../../../page.module.css";
import forumStyles from "../../forum.module.css";
import Link from "next/link";
import { forumPosts, forumCategories } from "../../forum-data";

export function generateStaticParams() {
    return forumCategories.filter(c => c.id !== 'all').map((cat) => ({
        category: cat.id,
    }));
}

const basePath = "";

export default function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = params;
    const currentCategory = forumCategories.find(c => c.id === category);
    const filteredPosts = forumPosts.filter(p => p.category === category);

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

            <main style={{ padding: "120px 0 80px" }}>
                <div className="container">
                    <div className={forumStyles.forumHeader}>
                        <div className={forumStyles.forumTitleGroup}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                                <Link href="/community/forum" style={{ color: '#64748b', fontSize: 14 }}>社群论坛</Link>
                                <span style={{ color: '#cbd5e1' }}>/</span>
                                <span style={{ color: '#f4621c', fontSize: 14, fontWeight: 700 }}>{currentCategory?.label}</span>
                            </div>
                            <h1 className={forumStyles.forumTitle}>{currentCategory?.label}</h1>
                            <p className={forumStyles.forumSubtitle}>听见真实的声音，发现更多精彩内容。</p>
                        </div>
                    </div>

                    <div className={forumStyles.tabs}>
                        {forumCategories.map(cat => (
                            <Link
                                key={cat.id}
                                href={cat.id === 'all' ? '/community/forum' : `/community/forum/${cat.id}`}
                                className={`${forumStyles.tab} ${cat.id === category ? forumStyles.tabActive : ''}`}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>

                    <div className={forumStyles.postGrid}>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Link key={post.id} href={`/community/forum/post/${post.id}`} className={forumStyles.postCard}>
                                    <div className={forumStyles.postMeta}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span className={forumStyles.categoryTag}>{post.categoryLabel}</span>
                                            {post.isHot && <span className={forumStyles.badgeHot}>HOT</span>}
                                            {post.isNew && <span className={forumStyles.badgeNew}>NEW</span>}
                                        </div>
                                        <span className={forumStyles.postDate}>{post.date}</span>
                                    </div>
                                    <h3 className={forumStyles.postTitle}>{post.title}</h3>
                                    <p className={forumStyles.postExcerpt}>{post.excerpt}</p>
                                    <div className={forumStyles.postFooter}>
                                        <div className={forumStyles.authorInfo}>
                                            <div className={forumStyles.authorAvatar}>{post.authorAvatar}</div>
                                            <span className={forumStyles.authorName}>{post.author}</span>
                                        </div>
                                        <div className={forumStyles.postStats}>
                                            <div style={statItemStyle}>👁️ {post.views}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px 0', color: '#94a3b8' }}>该分类下暂无帖子</p>
                        )}
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

const statItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#94a3b8",
    fontSize: "12px"
} as any;
