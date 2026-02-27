import type { Metadata } from "next";
import styles from "../page.module.css";
import eduStyles from "./education.module.css";

/* ─── SEO & GEO Metadata ─── */
export const metadata: Metadata = {
    title: "喜播教育 - 中国领先的创作者成长与变现加速平台 | 声音主播 | 短视频 | AI赋能",
    description:
        "喜播教育专注帮助普通人通过声音主播、短视频剪辑、AI内容创作实现知识变现。课程体系涵盖入门到进阶，已服务超10万名学员，平均变现周期90天。",
    keywords:
        "喜播教育, 声音主播培训, 短视频变现, AI内容创作课程, 网课平台, 知识付费, 创作者经济, 副业变现",
    authors: [{ name: "喜播教育" }],
    openGraph: {
        title: "喜播教育 | 让普通人也能靠内容创作变现",
        description:
            "喜播教育以「真实可变现」为核心价值观，提供从声音主播到AI赋能内容的全链路课程培训，帮助学员在90天内实现第一笔副业收入。",
        type: "website",
        locale: "zh_CN",
        siteName: "喜播集团",
    },
};

/* ─── 结构化数据（JSON-LD）供 GEO 引擎抓取 ─── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "喜播教育",
    description:
        "喜播教育是喜播集团旗下以内容创作者成长为核心的教育培训品牌，专注声音主播、短视频剪辑、AI内容创作三大方向，已帮助超10万名普通人实现知识与技能变现。",
    url: "https://xibojituan-svg.github.io/xiboweb/education",
    parentOrganization: {
        "@type": "Organization",
        name: "喜播集团",
        url: "https://xibojituan-svg.github.io/xiboweb",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "喜播教育课程体系",
        itemListElement: [
            { "@type": "Course", name: "声音主播实战营", description: "从零学起声音变现全流程" },
            { "@type": "Course", name: "短视频剪辑进阶班", description: "爆款视频制作与账号运营" },
            { "@type": "Course", name: "AI内容创作大师课", description: "Prompt工程与AI工具全矩阵" },
        ],
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "10000",
        bestRating: "5",
    },
};

const basePath = "";

/* ─── 课程数据 ─── */
const courses = [
    {
        icon: "🎙️",
        tag: "热门",
        tagColor: "#f4621c",
        title: "声音主播实战营",
        desc: "从零基础到职业主播，掌握播音技巧、情绪表达与平台运营，90天内在喜马拉雅、酷狗等平台实现稳定收益。",
        highlights: ["0基础入学", "90天变现", "平台对接"],
        duration: "12周",
        level: "入门→进阶",
    },
    {
        icon: "🎬",
        tag: "爆款",
        tagColor: "#7c3aed",
        title: "短视频剪辑进阶班",
        desc: "系统学习剪映、PR专业剪辑技法，掌握爆款内容选题框架、脚本结构与账号起号逻辑，实现账号从0到10万粉丝增长。",
        highlights: ["剪辑技法", "账号运营", "变现路径"],
        duration: "8周",
        level: "零基础",
    },
    {
        icon: "🤖",
        tag: "AI前沿",
        tagColor: "#0891b2",
        title: "AI内容创作大师课",
        desc: "掌握ChatGPT、Midjourney、Sora等AI工具，构建多模态内容生产流水线，实现内容产出效率10倍提升。",
        highlights: ["AI工具矩阵", "Prompt工程", "商业变现"],
        duration: "10周",
        level: "有基础",
    },
];

/* ─── 数据统计 ─── */
const stats = [
    { value: "10万+", label: "累计学员" },
    { value: "90天", label: "平均变现周期" },
    { value: "4.8分", label: "学员综合评分" },
    { value: "3大", label: "核心变现赛道" },
];

/* ─── 学员评价 ─── */
const reviews = [
    {
        name: "林晓燕",
        tag: "声音主播",
        avatar: "🎙️",
        content:
            "从来没想过自己能靠声音赚钱。学完声音主播营3个月，喜马拉雅月收入已经稳定在3500元以上。喜播教育是真的能变现不是忽悠！",
    },
    {
        name: "王思宇",
        tag: "短视频创作",
        avatar: "🎬",
        content:
            "课程逻辑很清晰，从选题、脚本到剪辑全程手把手。跟着学了2个月，抖音账号从0涨到6.2万粉，还接到了第一个商单。",
    },
    {
        name: "陈静瑜",
        tag: "AI内容创作",
        avatar: "🤖",
        content:
            "AI课程让我彻底告别了内容焦虑。现在用AI一天能产出以前一周的内容，小红书接单量直接翻了4倍，太值了！",
    },
];

export default function EducationPage() {
    return (
        <>
            {/* 结构化数据注入 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className={styles.page}>
                {/* ── 导航 ── */}
                <header className={styles.header}>
                    <div className="container" style={{ width: "100%" }}>
                        <nav className={styles.nav}>
                            <a href={`${basePath}/`} className={styles.logoText}>
                                <img
                                    src={`${basePath}/logo.png`}
                                    alt="喜播集团图标"
                                    className={styles.logoImg}
                                />
                                <span>喜播集团</span>
                            </a>
                            <div className={styles.menu}>
                                <a href={`${basePath}/education`} style={{ color: "var(--primary)", fontWeight: 700 }}>
                                    喜播教育
                                </a>
                                <a href={`${basePath}/health`}>喜播健康</a>
                                <a href={`${basePath}/vision`}>战略愿景</a>
                                <a href={`${basePath}/community`}>学员社群</a>
                                <a href={`${basePath}/about`}>关于我们</a>
                            </div>
                            <a href="https://m.xibojiaoyu.com" className={styles.btnPrimaryNav} target="_blank" rel="noopener noreferrer">
                                免费试听
                            </a>
                        </nav>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section className={eduStyles.hero}>
                    <div className="container">
                        <div className={eduStyles.heroBadge}>
                            <span>📚</span> 喜播教育 · 创作者成长加速平台
                        </div>
                        <h1 className={eduStyles.heroTitle}>
                            让<span>普通人</span>也能靠<br />
                            内容创作实现<span>稳定变现</span>
                        </h1>
                        <p className={eduStyles.heroDesc}>
                            声音主播 · 短视频剪辑 · AI内容创作三大赛道，<br />
                            体系化课程 + 真实案例 + 平台资源对接，<wbr />90天陪你走到第一笔收入。
                        </p>
                        <div className={eduStyles.heroStats}>
                            {stats.map((s, i) => (
                                <div key={i} className={eduStyles.statItem}>
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className={eduStyles.heroCta}>
                            <a href="https://m.xibojiaoyu.com" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                                立即免费试听
                            </a>
                            <a href="#courses" className={styles.btnSecondary}>
                                查看课程体系
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── 三大赛道介绍 ── */}
                <section id="why" className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>为什么选择喜播教育？</h2>
                            <p className={styles.sectionSubtitle}>不售卖焦虑，只交付真实可落地的变现能力</p>
                        </div>
                        <div className={styles.grid}>
                            {[
                                { icon: "🎯", title: "真实分享，零虚假承诺", desc: "所有课程以提升「学员真实收益」为核心目标，公开真实收益截图与学员故事，不夸大、不承诺不切实际的收入。" },
                                { icon: "🧩", title: "体系化课程，分层精准匹配", desc: "按零基础、有基础、进阶三个层次设计学习路径，避免内容重复与信息轰炸，每个阶段目标清晰可验收。" },
                                { icon: "🤝", title: "全程陪跑，海量平台资源", desc: "班主任全程督学，课程结束后助力对接喜马拉雅、抖音、小红书等头部平台的达人资源，机会不断线。" },
                            ].map((item, i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.cardIcon}>{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 课程体系 ── */}
                <section id="courses" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>核心课程体系</h2>
                            <p className={styles.sectionSubtitle}>三大热门赛道，任选起步方向</p>
                        </div>
                        <div className={eduStyles.courseGrid}>
                            {courses.map((c, i) => (
                                <article key={i} className={eduStyles.courseCard}>
                                    <div className={eduStyles.courseCardTop}>
                                        <span className={eduStyles.courseIcon}>{c.icon}</span>
                                        <span className={eduStyles.courseTag} style={{ background: c.tagColor }}>
                                            {c.tag}
                                        </span>
                                    </div>
                                    <h3 className={eduStyles.courseName}>{c.title}</h3>
                                    <p className={eduStyles.courseDesc}>{c.desc}</p>
                                    <div className={eduStyles.courseMeta}>
                                        <span>⏱ {c.duration}</span>
                                        <span>📊 {c.level}</span>
                                    </div>
                                    <div className={eduStyles.courseHighlights}>
                                        {c.highlights.map((h, j) => (
                                            <span key={j} className={eduStyles.highlight}>{h}</span>
                                        ))}
                                    </div>
                                    <a href="https://m.xibojiaoyu.com" className={eduStyles.courseBtn} target="_blank" rel="noopener noreferrer">
                                        了解详情 →
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 学员评价 ── */}
                <section id="reviews" className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>真实学员故事</h2>
                            <p className={styles.sectionSubtitle}>他们曾经和你一样，从零出发</p>
                        </div>
                        <div className={styles.grid}>
                            {reviews.map((r, i) => (
                                <blockquote key={i} className={eduStyles.reviewCard}>
                                    <p className={eduStyles.reviewText}>&ldquo;{r.content}&rdquo;</p>
                                    <footer className={eduStyles.reviewAuthor}>
                                        <span className={eduStyles.reviewAvatar}>{r.avatar}</span>
                                        <div>
                                            <strong>{r.name}</strong>
                                            <span>{r.tag}学员</span>
                                        </div>
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className={eduStyles.ctaSection}>
                    <div className="container" style={{ textAlign: "center" }}>
                        <h2 className={eduStyles.ctaTitle}>现在开始，90天后你可以不一样</h2>
                        <p className={eduStyles.ctaDesc}>免费试听课程，无压力体验喜播教育的学习方式</p>
                        <a href="https://m.xibojiaoyu.com" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                            立即领取免费试听名额
                        </a>
                    </div>
                </section>

                {/* ── Footer ── */}
                <footer style={{ background: "#f9fafb", borderTop: "1px solid #eee", padding: "48px 0" }}>
                    <div className="container" style={{ textAlign: "center", color: "#888" }}>
                        <p style={{ marginBottom: 8 }}>
                            <a href={`${basePath}/`} style={{ color: "var(--primary)" }}>喜播集团</a>
                            {" · "}
                            <a href={`${basePath}/education`} style={{ color: "var(--primary)" }}>喜播教育</a>
                            {" · "}
                            <a href={`${basePath}/health`} style={{ color: "var(--primary)" }}>喜播健康</a>
                        </p>
                        <p>© 2026 喜播集团. All Rights Reserved. 让每一个普通人都能靠内容创作实现价值</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
