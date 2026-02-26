import type { Metadata } from "next";
import styles from "../../page.module.css";
import forumStyles from "../forum.module.css";
import Link from "next/link";
import { forumPosts, forumCategories } from "../forum-data";

export const metadata: Metadata = {
    title: "社群论坛 - 喜播集团 | 创作者交流大厅",
    description: "在这里，听见真实的声音，见证每一个微小的改变。加入创作者交流大厅，分享你的心得与变现历程。",
};

const basePath = "";

export default function ForumPage() {
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
                                <Link href="/community" style={{ color: '#64748b', fontSize: 14 }}>学员社群</Link>
                                <span style={{ color: '#cbd5e1' }}>/</span>
                                <span style={{ color: '#f4621c', fontSize: 14, fontWeight: 700 }}>社群论坛</span>
                            </div>
                            <h1 className={forumStyles.forumTitle}>创作者交流大厅</h1>
                            <p className={forumStyles.forumSubtitle}>听见真实的声音，交流变现的智慧。</p>
                        </div>
                        <button className={styles.btnPrimary} style={{ padding: '10px 24px', fontSize: 14 }}>+ 发布帖子</button>
                    </div>

                    <div className={forumStyles.tabs}>
                        {forumCategories.map(cat => (
                            <Link
                                key={cat.id}
                                href={cat.id === 'all' ? '/community/forum' : `/community/forum/${cat.id}`}
                                className={`${forumStyles.tab} ${cat.id === 'all' ? forumStyles.tabActive : ''}`}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>

                    <div className={forumStyles.postGrid}>
                        {forumPosts.map((post) => (
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
                                        <div className={forumStyles.statItem}>
                                            <span>👁️ {post.views}</span>
                                        </div>
                                        <div className={forumStyles.statItem}>
                                            <span>👍 {post.likes}</span>
                                        </div>
                                        <div className={forumStyles.statItem}>
                                            <span>💬 {post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
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
