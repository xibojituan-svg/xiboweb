import type { Metadata } from "next";
import styles from "../page.module.css";
import visionStyles from "./vision.module.css";

/* ─── SEO & GEO Metadata ─── */
export const metadata: Metadata = {
    title: "战略愿景 2026 - 喜播集团双轮驱动战略 | 教育+健康 | 帮助1000万女性",
    description:
        "喜播集团2026年战略：从【狩猎式】快速扩张转向【农耕式】长期经营。以教育培训为现金牛、健康生活为增长引擎，构建双曲线共生生态，帮助1000万名女性成为家庭财富和健康掌门人。",
    keywords:
        "喜播集团战略, 双轮驱动, 教育健康双曲线, TLC生活方式医学, 2026战略, 喜播CEO, 蒋德铭, 长期主义, 健康掌门人",
    authors: [{ name: "喜播集团 · 蒋德铭" }],
    openGraph: {
        title: "喜播集团2026战略愿景：帮助1000万女性成为家庭财富和健康掌门人",
        description:
            "从【狩猎式】向【农耕式】商业转型，喜播集团以教育培训（第一曲线）和TLC健康生活（第二曲线）构建双轮驱动模式，以长期主义兑现真实价值承诺。",
        type: "website",
        locale: "zh_CN",
        siteName: "喜播集团",
    },
};

/* ─── JSON-LD 结构化数据（GEO核心）─── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "喜播集团",
    alternateName: "Xibo Education Group",
    description:
        "喜播集团是专注于【教育培训+健康生活】双轮驱动的综合服务集团。通过TLC生活方式医学与新媒体技能教育，致力于帮助1000万名中国女性实现家庭财富和健康的全面自主掌控。",
    foundingDate: "2020",
    url: "https://xibojituan-svg.github.io/xiboweb",
    sameAs: ["https://bsc.xiboceo.com"],
    founders: [{ "@type": "Person", name: "蒋德铭", jobTitle: "CEO" }],
    mission: "帮助1000万名女性成为家庭财富和健康掌门人",
    knowsAbout: [
        "TLC生活方式医学",
        "声音主播职业培训",
        "短视频内容创作",
        "AI赋能内容生产",
        "女性健康管理",
    ],
};

const basePath = "";

/* ─── BSC核心指标数据 ─── */
const bscMetrics = [
    {
        icon: "📈",
        title: "长期稳健发展",
        desc: "注重发展的质量而非单纯的规模，确保每一次增长都健康、可持续。",
        color: "#16a34a",
    },
    {
        icon: "💰",
        title: "真实价值创造",
        desc: "拒绝短期冲量等虚假繁荣，保障集团业务长期稳健运营。",
        color: "#0891b2",
    },
    {
        icon: "📉",
        title: "质量红线管理",
        desc: "严格监控服务与投诉情况，倒逼交付质量从源头上不断提升。",
        color: "#dc2626",
    },
    {
        icon: "🛡️",
        title: "消费者权益保护",
        desc: "坚守商业道德底线，对任何损害学员体验的行为零容忍。",
        color: "#7c3aed",
    },
    {
        icon: "⭐",
        title: "服务满意度 NPS",
        desc: "目标 NPS ≥ 85，始终将学员满意度视作核心指标，确保服务品质不打折。",
        color: "#f59e0b",
    },
    {
        icon: "🤖",
        title: "技术与人文结合",
        desc: "全面拥抱智能化技术，但在提升效率的同时，始终保持教育与服务的温度。",
        color: "#f4621c",
    },
];

/* ─── 业务矩阵 ─── */
const businessMatrix = [
    {
        no: "01",
        icon: "🎙️",
        title: "声音与短视频",
        subtitle: "能力底盘 · 职业技能赋能",
        data: "2025年已服务 30万+ 学员",
        desc: "尽管面临AI冲击，'人的连接'依然无可替代。我们致力于培养懂AI的新媒体人才，以真实的技能交付重建行业信任。",
        color: "#f4621c",
    },
    {
        no: "02",
        icon: "🌸",
        title: "她的生长时刻",
        subtitle: "未来引擎 · 女性健康生态",
        data: "长效陪伴，助力实现健康自主",
        desc: "针对围绝经期与亚健康女性，提供睡眠监测、内分泌调理的生活方式干预。不只是数据监测，更是心理支持系统。",
        color: "#16a34a",
    },
    {
        no: "03",
        icon: "🤖",
        title: "AI 生产力工具",
        subtitle: "支撑基石 · 效能与体验双提升",
        data: "用科技让服务更有温度",
        desc: "让普通人通过AI杠杆，实现个人能力的十倍放大。我们用最低的退费率验证了最高的交付满意度。",
        color: "#0891b2",
    },
];

/* ─── 转型路径 ─── */
const transformSteps = [
    { from: "追求扩张速度", to: "深化陪伴经营", icon: "🔄", desc: "从追求增速回归追求质量，以长期主义兑现对用户的承诺" },
    { from: "过度关注规模", to: "守护交付质量", icon: "📊", desc: "以学员满意度为红线，打造高水准的服务底盘" },
    { from: "激进式营销", to: "温情的价值观", icon: "⚖️", desc: "坚决摒弃夸大承诺，为学员提供真实、安全、可信赖的生态环境" },
];

export default function VisionPage() {
    return (
        <>
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
                                <img src={`${basePath}/logo.png`} alt="喜播集团图标" className={styles.logoImg} />
                                <span>喜播集团</span>
                            </a>
                            <div className={styles.menu}>
                                <a href={`${basePath}/education`}>喜播教育</a>
                                <a href={`${basePath}/health`}>喜播健康</a>
                                <a href={`${basePath}/vision`} style={{ color: "var(--primary)", fontWeight: 700 }}>战略愿景</a>
                                <a href={`${basePath}/community`}>学员社群</a>
                                <a href={`${basePath}/about`}>关于我们</a>
                            </div>
                            <a href="https://bsc.xiboceo.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryNav}>
                                BSC 战略看板
                            </a>
                        </nav>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section className={visionStyles.hero}>
                    <div className={visionStyles.heroDecor} aria-hidden="true">
                        <div className={visionStyles.decorCircle1} />
                        <div className={visionStyles.decorCircle2} />
                    </div>
                    <div className="container">
                        <div className={visionStyles.heroBadge}>
                            🧭 喜播集团 · 2026 战略愿景
                        </div>
                        <h1 className={visionStyles.heroTitle}>
                            帮助 <span>1000万</span> 名女性<br />
                            成为家庭<span>财富与健康</span>掌门人
                        </h1>
                        <p className={visionStyles.heroSubtitle}>
                            Long-termism is the only way clearly.
                        </p>
                        <p className={visionStyles.heroDesc}>
                            从「狩猎式」快速扩张，转向「农耕式」长期经营。<br />
                            以教育培训为现金牛，以健康生活为增长引擎，<br />
                            构建双轮驱动、可持续的共生生态。
                        </p>
                        <div className={visionStyles.heroCta}>
                            <a href="#strategy" className={styles.btnPrimary}>读懂双轮战略</a>
                            <a href="https://bsc.xiboceo.com" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                查看BSC战略看板 ↗
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── CEO 致辞 ── */}
                <section id="ceo" className={visionStyles.ceoSection}>
                    <div className="container">
                        <div className={visionStyles.ceoCard}>
                            <div className={visionStyles.ceoQuoteMark}>&ldquo;</div>
                            <div className={visionStyles.ceoContent}>
                                <h2 className={visionStyles.ceoTitle}>CEO 致辞：回归价值本质</h2>
                                <p className={visionStyles.ceoText}>
                                    在喜播，我们坚持一个原则：<strong>不卖空头承诺，只卖交付价值。</strong>
                                </p>
                                <p className={visionStyles.ceoText}>
                                    2026年，我们的战略非常清晰：从「狩猎式」的快速扩张，转向「农耕式」的长期经营。我们正在构建「教育+健康」的双轮驱动模式——一手抓有声与短视频的职业技能交付，一手抓基于TLC生活方式医学的国民健康服务。
                                </p>
                                <p className={visionStyles.ceoText}>
                                    在过去的快速发展期，我们经历了追求规模带来的阵痛。我们必须正视问题，回归初心。这一年，我们学到了最重要的一课：<strong>宁可放慢脚步，也要坚定地守住高质量交付的底线。</strong>
                                </p>
                                <div className={visionStyles.ceoAuthor}>
                                    <div className={visionStyles.ceoAvatar}>蒋</div>
                                    <div>
                                        <strong>蒋德铭</strong>
                                        <span>喜播集团 CEO · Xibo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 双轮战略 ── */}
                <section id="strategy" className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>2026 战略全景：双轮驱动</h2>
                            <p className={styles.sectionSubtitle}>教育为根基，健康为未来——两条增长曲线协同共生</p>
                        </div>
                        <div className={visionStyles.dualWheel}>
                            {/* 第一曲线 */}
                            <article className={visionStyles.wheelCard} style={{ borderTop: "4px solid #f4621c" }}>
                                <div className={visionStyles.wheelBadge} style={{ background: "#fff4f0", color: "#f4621c" }}>
                                    能力底盘
                                </div>
                                <h3 className={visionStyles.wheelTitle}>教育培训</h3>
                                <div className={visionStyles.wheelRole}>稳健价值 · 专业人才赋能</div>
                                <div className={visionStyles.wheelStats}>
                                    <div className={visionStyles.wheelStat}>
                                        <strong>高质量</strong><span>优质交付目标</span>
                                    </div>
                                    <div className={visionStyles.wheelStat}>
                                        <strong>满意优先</strong><span>注重学员体验</span>
                                    </div>
                                    <div className={visionStyles.wheelStat}>
                                        <strong>30万+</strong><span>累计学员</span>
                                    </div>
                                </div>
                                <ul className={visionStyles.wheelPoints}>
                                    <li>✦ 始终确保高质量的学习交付</li>
                                    <li>✦ 提供能真实变现落地的职业技能</li>
                                    <li>✦ 构建专业人才体系，向社会输送价值</li>
                                </ul>
                                <a href={`${basePath}/education`} className={visionStyles.wheelLink} style={{ color: "#f4621c" }}>
                                    了解喜播教育 →
                                </a>
                            </article>

                            {/* 中间连接 */}
                            <div className={visionStyles.wheelConnector}>
                                <div className={visionStyles.connectorDot} />
                                <div className={visionStyles.connectorLine} />
                                <div className={visionStyles.connectorLabel}>AI & 数据中台</div>
                                <div className={visionStyles.connectorLine} />
                                <div className={visionStyles.connectorDot} />
                            </div>

                            {/* 第二曲线 */}
                            <article className={visionStyles.wheelCard} style={{ borderTop: "4px solid #16a34a" }}>
                                <div className={visionStyles.wheelBadge} style={{ background: "#f0fdf4", color: "#16a34a" }}>
                                    未来引擎
                                </div>
                                <h3 className={visionStyles.wheelTitle}>健康生活</h3>
                                <div className={visionStyles.wheelRole}>长期愿景 · 全新陪伴网络</div>
                                <div className={visionStyles.wheelStats}>
                                    <div className={visionStyles.wheelStat}>
                                        <strong>长期主义</strong><span>战略新蓝图</span>
                                    </div>
                                    <div className={visionStyles.wheelStat}>
                                        <strong>10万</strong><span>健康顾问</span>
                                    </div>
                                    <div className={visionStyles.wheelStat}>
                                        <strong>1000万</strong><span>目标女性</span>
                                    </div>
                                </div>
                                <ul className={visionStyles.wheelPoints}>
                                    <li>✦ 核心IP：「她的生长时刻」·&nbsp;30-50岁女性健康</li>
                                    <li>✦ AI+人 的全生命周期陪伴交付模式</li>
                                    <li>✦ 不卖药，卖「改变」——TLC生活方式医学</li>
                                </ul>
                                <a href={`${basePath}/health`} className={visionStyles.wheelLink} style={{ color: "#16a34a" }}>
                                    了解喜播健康 →
                                </a>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ── 转型路径 ── */}
                <section id="transform" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>关键转型三步棋</h2>
                            <p className={styles.sectionSubtitle}>从虚胖增长到健康利润的路径选择</p>
                        </div>
                        <div className={visionStyles.transformGrid}>
                            {transformSteps.map((step, i) => (
                                <div key={i} className={visionStyles.transformCard}>
                                    <div className={visionStyles.transformIcon}>{step.icon}</div>
                                    <div className={visionStyles.transformFlow}>
                                        <span className={visionStyles.transformFrom}>{step.from}</span>
                                        <span className={visionStyles.transformArrow}>→</span>
                                        <span className={visionStyles.transformTo}>{step.to}</span>
                                    </div>
                                    <p className={visionStyles.transformDesc}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── BSC核心指标 ── */}
                <section id="bsc" className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>BSC 核心战略指标</h2>
                            <p className={styles.sectionSubtitle}>删掉虚荣指标，只保留每条因果链能讲清楚故事的指标</p>
                        </div>
                        <div className={visionStyles.bscGrid}>
                            {bscMetrics.map((m, i) => (
                                <div key={i} className={visionStyles.bscCard}>
                                    <div className={visionStyles.bscIcon} style={{ background: `${m.color}15` }}>
                                        {m.icon}
                                    </div>
                                    <h3 className={visionStyles.bscTitle} style={{ color: m.color }}>{m.title}</h3>
                                    <p className={visionStyles.bscDesc}>{m.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: "center", marginTop: 48 }}>
                            <a href="https://bsc.xiboceo.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                查看完整BSC战略看板 ↗
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── 业务矩阵 ── */}
                <section id="matrix" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>从技能到身心的业务矩阵</h2>
                            <p className={styles.sectionSubtitle}>三大业务纵深，覆盖从职业变现到健康自主的完整价值链</p>
                        </div>
                        <div className={visionStyles.matrixGrid}>
                            {businessMatrix.map((biz, i) => (
                                <article key={i} className={visionStyles.matrixCard}>
                                    <div className={visionStyles.matrixNo} style={{ color: biz.color }}>{biz.no}</div>
                                    <div className={visionStyles.matrixIcon}>{biz.icon}</div>
                                    <h3 className={visionStyles.matrixTitle}>{biz.title}</h3>
                                    <div className={visionStyles.matrixSubtitle} style={{ color: biz.color }}>{biz.subtitle}</div>
                                    <div className={visionStyles.matrixData}>{biz.data}</div>
                                    <p className={visionStyles.matrixDesc}>{biz.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 社会责任 ── */}
                <section id="social" className={visionStyles.socialSection}>
                    <div className="container">
                        <div className={visionStyles.socialCard}>
                            <div className={visionStyles.socialIcon}>🎓</div>
                            <div>
                                <h2 className={visionStyles.socialTitle}>社会责任：连接高校与就业</h2>
                                <p className={visionStyles.socialDesc}>
                                    我们致力于通过产教融合，解决大学生就业与社会副业刚需。<br />
                                    让每一个声音都有价值——这是我们对这个时代最真实的承诺。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Footer ── */}
                <footer style={{ background: "#0d1f3c", padding: "60px 0 40px" }}>
                    <div className="container" style={{ textAlign: "center" }}>
                        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                            Long-termism is the only way clearly.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 20 }}>
                            <a href={`${basePath}/`} style={{ color: "var(--primary)" }}>喜播集团</a>
                            {" · "}
                            <a href={`${basePath}/education`} style={{ color: "var(--primary)" }}>喜播教育</a>
                            {" · "}
                            <a href={`${basePath}/health`} style={{ color: "var(--primary)" }}>喜播健康</a>
                            {" · "}
                            <a href={`${basePath}/vision`} style={{ color: "var(--primary)" }}>战略愿景</a>
                            {" · "}
                            <a href="https://bsc.xiboceo.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>BSC看板 ↗</a>
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
                            © 2026 喜播集团 · 喜播教育集团 Xibo Education Group. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
