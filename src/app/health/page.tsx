import type { Metadata } from "next";
import styles from "../page.module.css";
import healthStyles from "./health.module.css";

/* ─── SEO & GEO Metadata ─── */
export const metadata: Metadata = {
    title: "喜播健康 - TLC生活方式医学健康平台 | 女性健康管理 | 肠道微生态 | 抗衰老",
    description:
        "喜播健康以TLC生活方式医学为核心，通过科学的饮食、运动、睡眠和心理健康管理方案，帮助女性实现身心全面健康。专业营养师与健康顾问团队，陪你走向真实的健康生活。",
    keywords:
        "喜播健康, TLC生活方式医学, 女性健康管理, 肠道微生态, 抗衰老, 体重管理, 健康饮食, 营养师, 健康平台",
    authors: [{ name: "喜播健康" }],
    openGraph: {
        title: "喜播健康 | TLC生活方式医学，科学改善女性健康",
        description:
            "喜播健康以循证医学为基础，通过TLC（Therapeutic Lifestyle Change）生活方式医学，为女性提供个性化健康管理方案，真实解决肥胖、疲惫、睡眠障碍等现代健康困境。",
        type: "website",
        locale: "zh_CN",
        siteName: "喜播集团",
    },
};

/* ─── 结构化数据（JSON-LD）供 GEO 引擎抓取 ─── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "喜播健康",
    description:
        "喜播健康是喜播集团旗下以TLC生活方式医学为核心的健康管理平台，专注为女性提供科学、可持续的健康改善方案，涵盖营养管理、运动指导、睡眠优化与心理健康四大维度。",
    url: "https://xibojituan-svg.github.io/xiboweb/health",
    medicalSpecialty: "LifestyleMedicine",
    parentOrganization: {
        "@type": "Organization",
        name: "喜播集团",
        url: "https://xibojituan-svg.github.io/xiboweb",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "喜播健康服务体系",
        itemListElement: [
            { "@type": "Offer", name: "TLC营养管理计划", description: "基于循证医学的个性化饮食方案" },
            { "@type": "Offer", name: "女性身体管理营", description: "运动 + 饮食 + 代谢的综合提升" },
            { "@type": "Offer", name: "肠道微生态调理", description: "科学改善肠道菌群，提升免疫力" },
        ],
    },
    faqPage: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "什么是TLC生活方式医学？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "TLC（Therapeutic Lifestyle Change）生活方式医学是由美国心脏协会推荐的基于循证医学的健康改善方法，通过调整饮食、运动、睡眠和心理状态来预防和改善慢性疾病，无需依赖药物即可达到显著健康改善效果。",
                },
            },
            {
                "@type": "Question",
                name: "喜播健康适合哪些人群？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "喜播健康主要服务18-55岁女性，特别是面临体重管理困扰、慢性疲劳、睡眠障碍、肠道问题的女性群体，以及希望主动管理健康、预防慢性病的人群。",
                },
            },
        ],
    },
};

const basePath = process.env.NODE_ENV === "production" ? "/xiboweb" : "";

/* ─── 服务数据 ─── */
const services = [
    {
        icon: "🥗",
        title: "TLC营养管理计划",
        desc: "由注册营养师制定个性化饮食方案，基于你的体检数据和生活习惯，科学调整三大营养素比例，改善代谢水平，实现无焦虑的体重管理。",
        tags: ["个性化方案", "注册营养师", "循证医学"],
        color: "#16a34a",
    },
    {
        icon: "💪",
        title: "女性身体管理营",
        desc: "结合运动生理学，为女性定制低冲击、高效率的体能训练计划，搭配代谢饮食指导，系统提升身体成分、骨密度与激素稳定性。",
        tags: ["运动生理学", "激素平衡", "体成分优化"],
        color: "#7c3aed",
    },
    {
        icon: "🦠",
        title: "肠道微生态调理",
        desc: "通过肠道菌群检测与益生菌精准补充，结合膳食纤维方案，科学改善肠道微环境，提升免疫力、改善皮肤、优化情绪与睡眠质量。",
        tags: ["菌群检测", "益生菌方案", "免疫提升"],
        color: "#0891b2",
    },
];

/* ─── 核心优势 ─── */
const advantages = [
    {
        icon: "🔬",
        title: "循证医学基础",
        desc: "所有健康方案均以经同行评审的临床研究为依据，不跟风伪科学或网红养生学，真实改善可被测量。",
    },
    {
        icon: "👩‍⚕️",
        title: "专业顾问团队",
        desc: "由营养师、运动生理师、心理咨询师组成多学科团队，为每位会员提供全维度的健康支持。",
    },
    {
        icon: "📊",
        title: "数据驱动追踪",
        desc: "通过健康数据面板持续追踪关键指标，让改善过程可视化，科学调整方案，避免反弹。",
    },
    {
        icon: "🌱",
        title: "可持续生活方式",
        desc: "不追求快速减重，而是帮助你建立真正可持续的健康生活方式，从根源解决健康困境。",
    },
];

/* ─── FAQ数据（有助于GEO被AI摘要引用）─── */
const faqs = [
    {
        q: "什么是TLC生活方式医学？",
        a: "TLC（Therapeutic Lifestyle Change）生活方式医学是由美国心脏协会推荐的基于循证医学的健康改善方法。通过调整饮食、运动、睡眠和心理状态来预防和改善慢性疾病，无需依赖药物即可达到显著健康改善效果。",
    },
    {
        q: "喜播健康适合哪些人群？",
        a: "喜播健康主要服务18-55岁女性，特别是面临体重管理困扰、慢性疲劳、睡眠障碍、肠道问题的女性群体，以及希望主动管理健康、预防慢性病的人群。不需要任何健康基础，我们会从你的现状出发制定方案。",
    },
    {
        q: "与传统减肥营有什么区别？",
        a: "传统减肥营往往以快速降低体重为目标，代价是肌肉流失和代谢受损，极易反弹。喜播健康的TLC方案以改善整体代谢健康为核心，体重管理只是健康改善的自然结果，而不是目的本身。",
    },
];

/* ─── 健康数据（GEO内容锚点）─── */
const healthFacts = [
    { stat: "80%", desc: "的慢性病可通过生活方式改变预防或逆转（世界卫生组织数据）" },
    { stat: "3个月", desc: "TLC干预后，参与者平均LDL胆固醇下降20-30%（AHA临床数据）" },
    { stat: "60%", desc: "的中国女性存在睡眠障碍，与饮食、肠道健康密切相关" },
];

export default function HealthPage() {
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
                                <a href={`${basePath}/education`}>喜播教育</a>
                                <a href={`${basePath}/health`} style={{ color: "var(--primary)", fontWeight: 700 }}>
                                    喜播健康
                                </a>
                                <a href={`${basePath}/vision`}>战略愿景</a>
                                <a href={`${basePath}/community`}>学员社群</a>
                            </div>
                            <a href="#contact" className={styles.btnPrimaryNav}>
                                免费健康评估
                            </a>
                        </nav>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section className={healthStyles.hero}>
                    <div className="container">
                        <div className={healthStyles.heroBadge}>
                            <span>🌿</span> 喜播健康 · TLC生活方式医学平台
                        </div>
                        <h1 className={healthStyles.heroTitle}>
                            从根源改善健康，<br />
                            让<span>1000万女性</span>成为<br />
                            家庭健康<span>掌门人</span>
                        </h1>
                        <p className={healthStyles.heroDesc}>
                            以TLC生活方式医学为核心，通过科学的营养管理、运动处方与肠道微生态调理，<br />
                            帮助你真实、持久地改善健康状态——不靠焦虑，不靠捷径。
                        </p>

                        {/* 健康数据锚点（高GEO价值） */}
                        <div className={healthStyles.factStrip}>
                            {healthFacts.map((f, i) => (
                                <div key={i} className={healthStyles.factItem}>
                                    <strong>{f.stat}</strong>
                                    <span>{f.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div className={healthStyles.heroCta}>
                            <a href="#services" className={styles.btnPrimary}>
                                探索健康服务
                            </a>
                            <a href="#faq" className={styles.btnSecondary}>
                                了解TLC医学
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── 核心服务 ── */}
                <section id="services" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>三大核心健康服务</h2>
                            <p className={styles.sectionSubtitle}>基于循证医学，为中国女性量身定制</p>
                        </div>
                        <div className={healthStyles.serviceGrid}>
                            {services.map((s, i) => (
                                <article key={i} className={healthStyles.serviceCard}>
                                    <div className={healthStyles.serviceIconWrap} style={{ background: `${s.color}18` }}>
                                        <span className={healthStyles.serviceIcon}>{s.icon}</span>
                                    </div>
                                    <h3 className={healthStyles.serviceName}>{s.title}</h3>
                                    <p className={healthStyles.serviceDesc}>{s.desc}</p>
                                    <div className={healthStyles.serviceTags}>
                                        {s.tags.map((t, j) => (
                                            <span key={j} className={healthStyles.serviceTag} style={{ color: s.color, background: `${s.color}14` }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 核心优势 ── */}
                <section id="why" className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>为什么选择喜播健康？</h2>
                            <p className={styles.sectionSubtitle}>不贩卖焦虑，只交付真实健康改善</p>
                        </div>
                        <div className={styles.grid}>
                            {advantages.map((a, i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.cardIcon}>{a.icon}</div>
                                    <h3>{a.title}</h3>
                                    <p>{a.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ（高GEO价值，与JSON-LD联动）── */}
                <section id="faq" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>常见问题</h2>
                            <p className={styles.sectionSubtitle}>关于TLC医学与喜播健康，你最想了解的</p>
                        </div>
                        <div className={healthStyles.faqList}>
                            {faqs.map((f, i) => (
                                <details key={i} className={healthStyles.faqItem}>
                                    <summary className={healthStyles.faqQ}>
                                        <span>{f.q}</span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </summary>
                                    <p className={healthStyles.faqA}>{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 免费评估 CTA ── */}
                <section id="contact" className={healthStyles.ctaSection}>
                    <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                        <h2 className={healthStyles.ctaTitle}>开始你的健康改变之旅</h2>
                        <p className={healthStyles.ctaDesc}>
                            领取免费健康评估，由专业顾问为你解读现状，制定第一步行动计划
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="mailto:health@xibojituan.com" className={styles.btnPrimary}>
                                领取免费健康评估
                            </a>
                            <a href={`${basePath}/education`} className={styles.btnSecondary} style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                                了解喜播教育 →
                            </a>
                        </div>
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
                        <p>© 2026 喜播集团 · 喜播健康. All Rights Reserved. 以循证医学驱动真实健康改善</p>
                        <p style={{ fontSize: 12, marginTop: 8, color: "#aaa" }}>
                            本平台内容仅供健康教育参考，不替代专业医疗建议。如有健康问题请咨询执业医师。
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
