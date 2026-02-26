import type { Metadata } from "next";
import styles from "../page.module.css";
import aboutStyles from "./about.module.css";

/* ─── SEO & GEO Metadata ─── */
export const metadata: Metadata = {
    title: "关于我们 - 喜播集团 | 品牌历史 | 核心团队 | 发展历程",
    description:
        "喜播集团成立于2019年，是AI赋能的在线个性化技能成长与社群服务平台，同时为喜马拉雅生态企业。累计培养学员700万+，致力于用科技分享人类智慧，让再小的生命也能吐露芬芳。",
    keywords:
        "喜播集团, 关于喜播, 喜播历史, 喜播团队, 喜播学堂, 喜创, 有声之夜, 喜播发展历程",
    openGraph: {
        title: "关于喜播集团 | 用科技分享人类智慧",
        description:
            "从2019年喜马拉雅大学事业部到2025年战略升级为喜播集团，我们用六年时间帮助700万+普通人实现内容创作梦想。",
        type: "website",
        locale: "zh_CN",
        siteName: "喜播集团",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "喜播集团",
    alternateName: "喜播",
    description:
        "AI赋能的在线个性化技能成长与社群服务平台，喜马拉雅生态企业，累计培养学员700万+。",
    url: "https://xibojituan-svg.github.io/xiboweb/about",
    foundingDate: "2019",
    slogan: "用科技分享人类智慧，让再小的生命也能吐露芬芳",
};

const basePath = "";

/* ─── 发展历程数据 ─── */
const milestones = [
    {
        year: "2019",
        color: "#f4621c",
        events: [
            { month: "11月", text: "喜马拉雅大学事业部成立（喜播前身）" },
            { month: "12月", text: "攀登计划1.0版上线售卖" },
        ],
    },
    {
        year: "2021",
        color: "#7c3aed",
        events: [
            { month: "05月", text: "举办首届「有声之夜」全国有声主播大赛" },
            { month: "06月", text: "喜播教育品牌诞生（首次品牌升级）" },
        ],
    },
    {
        year: "2022",
        color: "#0891b2",
        events: [
            { month: "06月", text: "确立「让再小的生命也能吐露芬芳」的企业愿景" },
            { month: "06月", text: "确立「以用户为中心，做好比做大更重要」的企业价值观" },
        ],
    },
    {
        year: "2023",
        color: "#16a34a",
        events: [
            { month: "03月", text: "喜播自营剧社声工场成立" },
            { month: "03月", text: "首期音频后期课上线" },
            { month: "08月", text: "喜播教育信息技术（浙江）有限公司成立" },
            { month: "10月", text: "喜播首个AI产品线诞生（AI业务起点）" },
        ],
    },
    {
        year: "2024",
        color: "#d97706",
        events: [
            { month: "07月", text: "喜播公益助学，帮助残障人士金今喜捐赠声音教育课程" },
            { month: "11月", text: "首个AI Agent员工上线服务用户" },
        ],
    },
    {
        year: "2025",
        color: "#dc2626",
        events: [
            { month: "04月", text: "累计服务学员突破700万" },
            { month: "07月", text: "AI质检全面覆盖社群服务环节" },
            { month: "09月", text: "喜播教育品牌自喜马拉雅剥离，正式独立运营" },
            { month: "10月", text: "喜播教育品牌升级为喜播集团，培训业务更名为喜播学堂" },
            { month: "11月", text: "荣获「2025最佳雇主品牌」奖（第十六届北京人力资源博览会）" },
        ],
    },
];

/* ─── 核心子品牌 ─── */
const brands = [
    {
        icon: "🎓",
        name: "喜播学堂",
        color: "#f4621c",
        desc: "喜播旗下专注在线职业培训的核心品牌，前身为2021年成立的喜播教育。围绕有声课程、AI课程及硬件设备三大业务线，系统化培养内容创作领域的专业人才。",
        tags: ["有声书系列", "AI写作系列", "AI短视频系列"],
        stat: "700万+",
        statLabel: "累计培养学员",
    },
    {
        icon: "🚀",
        name: "喜创",
        color: "#7c3aed",
        desc: "致力于创作者成长与商业化发展的子品牌，聚焦人才扶持与IP孵化，提供商单对接、产业资源整合及多渠道变现支持。旗下设有喜播声艺传媒MCN。",
        tags: ["声工场剧社", "甲方来了栏目", "原创播客MCN", "声艺传媒直播工会"],
        stat: "MCN",
        statLabel: "多元变现矩阵",
    },
];

/* ─── 合作大咖 ─── */
const teachers = [
    { name: "艾宝良", title: "70年70人·杰出演播艺术家", works: "王牌评书艺人" },
    { name: "姜广涛", title: "配音演员、配音导演", works: "《琅琊榜》《泰坦尼克号》" },
    { name: "张震", title: "知名配音演员、演播艺术家", works: "《疯狂动物城》狐尼克" },
    { name: "冯骏骅", title: "知名配音演员", works: "《倚天屠龙记》《哈利波特》" },
    { name: "晏积瑄", title: "70年70人·杰出演播艺术家", works: "《武媚娘传奇》" },
    { name: "夏磊", title: "著名配音导演、配音演员", works: "《全职高手》" },
    { name: "周扬", title: "著名配音演员", works: "《扫黑风暴》湖南卫视声临其境专家" },
    { name: "王明军", title: "中国传媒大学副教授", works: "《三体》配音" },
    { name: "有声的紫襟", title: "喜马拉雅独家签约主播", works: "喜马平台粉丝量TOP1" },
    { name: "一刀苏苏", title: "喜马拉雅头部主播", works: "《第一风女》" },
    { name: "叶清", title: "著名配音导演、配音演员", works: "《无间道》" },
    { name: "武向彤", title: "配音导演、配音演员", works: "《英雄联盟》" },
];

/* ─── 合作高校 ─── */
const universities = [
    "中国传媒大学", "上海戏剧学院", "华东师范大学",
    "浙江传媒学院", "四川传媒学院", "四川电影电视学院",
];

/* ─── 荣誉 ─── */
const honors = [
    {
        icon: "🏆",
        title: "2025最佳雇主品牌",
        desc: "第十六届（北京）人力资源博览会暨2025HR年终盛典",
        year: "2025",
    },
    {
        icon: "🎬",
        title: "星芒优选剧本奖",
        desc: "喜播学员原创剧本荣获平遥国际电影展「快手聚光短剧计划」星芒优选剧本奖",
        year: "2025",
    },
    {
        icon: "🥉",
        title: "首届全国微短剧之夜三等奖",
        desc: "喜播学员作品《红色的鸢尾花》",
        year: "2025",
    },
];

export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                                <a href={`${basePath}/vision`}>战略愿景</a>
                                <a href={`${basePath}/community`}>学员社群</a>
                                <a href={`${basePath}/about`} style={{ color: "var(--primary)", fontWeight: 700 }}>关于我们</a>
                            </div>
                            <a href="https://m.xibojiaoyu.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryNav}>
                                加入喜播
                            </a>
                        </nav>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section className={aboutStyles.hero}>
                    <div className={aboutStyles.heroDecor} aria-hidden="true">
                        <div className={aboutStyles.circle1} />
                        <div className={aboutStyles.circle2} />
                    </div>
                    <div className="container">
                        <div className={aboutStyles.heroBadge}>🌟 喜播集团 · 成立于 2019</div>
                        <h1 className={aboutStyles.heroTitle}>
                            用科技分享<span>人类智慧</span>，<br />
                            让再小的生命也能<span>吐露芬芳</span>
                        </h1>
                        <p className={aboutStyles.heroDesc}>
                            从喜马拉雅大学事业部到喜播集团，六年陪伴 700万+ 普通人<br />
                            找到属于自己的声音与内容创作之路。
                        </p>
                        <div className={aboutStyles.heroStats}>
                            {[
                                { value: "700万+", label: "累计服务学员" },
                                { value: "6年", label: "深耕内容创作" },
                                { value: "8亿+", label: "有声之夜曝光量" },
                                { value: "5届", label: "有声之夜赛事" },
                            ].map((s, i) => (
                                <div key={i} className={aboutStyles.heroStat}>
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 品牌使命愿景价值观 ── */}
                <section className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>我们的信念</h2>
                            <p className={styles.sectionSubtitle}>使命、愿景与价值观，构成喜播一切行动的起点</p>
                        </div>
                        <div className={aboutStyles.beliefGrid}>
                            {[
                                {
                                    icon: "🌱",
                                    label: "品牌使命",
                                    title: "用科技分享人类智慧",
                                    desc: "让再小的生命也能吐露芬芳——无论你来自哪里、有多普通，每个人都值得被看见。",
                                },
                                {
                                    icon: "🌏",
                                    label: "品牌愿景",
                                    title: "成为全球创作者可信赖的事业伙伴",
                                    desc: "不止于中国，我们希望陪伴全球的内容创作者，共同构建有温度的创作者生态。",
                                },
                                {
                                    icon: "💎",
                                    label: "核心价值观",
                                    title: "以用户为中心，做好比做大更重要",
                                    desc: "踏踏实实服务创作者，拒绝浮夸承诺，用真实的价值交付赢得每一位学员的信任。",
                                },
                            ].map((b, i) => (
                                <div key={i} className={aboutStyles.beliefCard}>
                                    <div className={aboutStyles.beliefIcon}>{b.icon}</div>
                                    <span className={aboutStyles.beliefLabel}>{b.label}</span>
                                    <h3 className={aboutStyles.beliefTitle}>{b.title}</h3>
                                    <p className={aboutStyles.beliefDesc}>{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 发展历程 ── */}
                <section id="history" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>喜播发展历程</h2>
                            <p className={styles.sectionSubtitle}>从一颗种子，到700万人的创作者家园</p>
                        </div>
                        <div className={aboutStyles.timeline}>
                            {milestones.map((m, i) => (
                                <div key={i} className={aboutStyles.timelineItem}>
                                    <div className={aboutStyles.timelineYear} style={{ background: m.color }}>
                                        {m.year}
                                    </div>
                                    <div className={aboutStyles.timelineContent}>
                                        {m.events.map((e, j) => (
                                            <div key={j} className={aboutStyles.timelineEvent}>
                                                <span className={aboutStyles.timelineMonth} style={{ color: m.color }}>{e.month}</span>
                                                <span className={aboutStyles.timelineText}>{e.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 核心子品牌 ── */}
                <section className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>旗下核心品牌</h2>
                            <p className={styles.sectionSubtitle}>喜播学堂与喜创，共同构建覆盖培训与生态的综合服务体系</p>
                        </div>
                        <div className={aboutStyles.brandGrid}>
                            {brands.map((b, i) => (
                                <div key={i} className={aboutStyles.brandCard}>
                                    <div className={aboutStyles.brandIcon} style={{ background: `${b.color}18`, color: b.color }}>
                                        {b.icon}
                                    </div>
                                    <div className={aboutStyles.brandStat}>
                                        <strong style={{ color: b.color }}>{b.stat}</strong>
                                        <span>{b.statLabel}</span>
                                    </div>
                                    <h3 className={aboutStyles.brandName} style={{ color: b.color }}>{b.name}</h3>
                                    <p className={aboutStyles.brandDesc}>{b.desc}</p>
                                    <div className={aboutStyles.brandTags}>
                                        {b.tags.map((t, j) => (
                                            <span key={j} className={aboutStyles.brandTag} style={{ color: b.color, background: `${b.color}12` }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 有声之夜 ── */}
                <section className={aboutStyles.eventSection}>
                    <div className="container">
                        <div className={aboutStyles.eventInner}>
                            <div className={aboutStyles.eventLeft}>
                                <span className={aboutStyles.eventBadge}>🎤 标志性赛事</span>
                                <h2 className={aboutStyles.eventTitle}>有声之夜</h2>
                                <p className={aboutStyles.eventDesc}>
                                    由喜播主办的全国性声音赛事，致力于发掘与培养兼具艺术创造力和市场竞争力的有声演播人才。截至2025年11月，已成功举办<strong>五届</strong>，累计吸引<strong>上万名选手、近2000支队伍</strong>参与。
                                </p>
                                <div className={aboutStyles.eventStats}>
                                    {[
                                        { num: "5届", label: "成功举办" },
                                        { num: "8亿+", label: "累计曝光量" },
                                        { num: "2000+", label: "参赛队伍" },
                                    ].map((s, i) => (
                                        <div key={i} className={aboutStyles.eventStat}>
                                            <strong>{s.num}</strong>
                                            <span>{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={aboutStyles.eventRight}>
                                <div className={aboutStyles.eventQuote}>
                                    <p>"有声之夜——不仅是一场竞技，更是发掘有声新力量、推动艺术普及的青春宣言。"</p>
                                    <cite>— 新华网 媒体评价</cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 合作大咖 ── */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>合作大咖导师</h2>
                            <p className={styles.sectionSubtitle}>与行业顶尖艺术家合作，为学员带来最真实的专业资源</p>
                        </div>
                        <div className={aboutStyles.teacherGrid}>
                            {teachers.map((t, i) => (
                                <div key={i} className={aboutStyles.teacherCard}>
                                    <div className={aboutStyles.teacherAvatar}>
                                        {t.name[0]}
                                    </div>
                                    <div className={aboutStyles.teacherInfo}>
                                        <strong className={aboutStyles.teacherName}>{t.name}</strong>
                                        <span className={aboutStyles.teacherTitle}>{t.title}</span>
                                        <span className={aboutStyles.teacherWorks}>代表作：{t.works}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 高校合作 ── */}
                <section className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>校企战略合作</h2>
                            <p className={styles.sectionSubtitle}>与国内顶尖院校共建课程、赛事与人才培育项目</p>
                        </div>
                        <div className={aboutStyles.uniGrid}>
                            {universities.map((u, i) => (
                                <div key={i} className={aboutStyles.uniCard}>
                                    <span className={aboutStyles.uniIcon}>🎓</span>
                                    <span>{u}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 荣誉资质 ── */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>荣誉资质</h2>
                            <p className={styles.sectionSubtitle}>用成果证明价值，用荣誉回应信任</p>
                        </div>
                        <div className={aboutStyles.honorGrid}>
                            {honors.map((h, i) => (
                                <div key={i} className={aboutStyles.honorCard}>
                                    <div className={aboutStyles.honorIcon}>{h.icon}</div>
                                    <span className={aboutStyles.honorYear}>{h.year}</span>
                                    <h3 className={aboutStyles.honorTitle}>{h.title}</h3>
                                    <p className={aboutStyles.honorDesc}>{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 社会公益 ── */}
                <section className={aboutStyles.csrSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle} style={{ color: "white" }}>社会责任</h2>
                            <p className={styles.sectionSubtitle} style={{ color: "rgba(255,255,255,0.75)" }}>
                                让善意随声音传播，每一份微小的助力都值得被记录
                            </p>
                        </div>
                        <div className={aboutStyles.csrGrid}>
                            <div className={aboutStyles.csrCard}>
                                <div className={aboutStyles.csrIcon}>❤️</div>
                                <h3>喜播公益助学</h3>
                                <p>2024年7月，喜播联合嘉兴经开民生事业部举办公益助学捐赠仪式，向残障人士金今喜捐赠声音教育课程及配套设备，已帮助多位残障主播实现就业增收。</p>
                            </div>
                            <div className={aboutStyles.csrCard}>
                                <div className={aboutStyles.csrIcon}>🎓</div>
                                <h3>校企人才共育</h3>
                                <p>与中国传媒大学、上海戏剧学院、华东师范大学等6所院校开展课程共建、赛事活动及人才培育项目，共同为行业与社会输送声音及创作类人才。</p>
                            </div>
                            <div className={aboutStyles.csrCard}>
                                <div className={aboutStyles.csrIcon}>🌟</div>
                                <h3>有声赛事推动</h3>
                                <p>五届有声之夜赛事累计曝光超8亿，吸引上万名声音爱好者和专业主播参与，成为业内具有标杆地位和广泛影响力的专业竞技平台。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Footer ── */}
                <footer style={{ background: "#0d1f3c", padding: "48px 0 32px" }}>
                    <div className="container" style={{ textAlign: "center" }}>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 12 }}>
                            <a href={`${basePath}/`} style={{ color: "var(--primary)" }}>喜播集团</a>
                            {" · "}
                            <a href={`${basePath}/education`} style={{ color: "var(--primary)" }}>喜播教育</a>
                            {" · "}
                            <a href={`${basePath}/health`} style={{ color: "var(--primary)" }}>喜播健康</a>
                            {" · "}
                            <a href={`${basePath}/vision`} style={{ color: "var(--primary)" }}>战略愿景</a>
                            {" · "}
                            <a href={`${basePath}/community`} style={{ color: "var(--primary)" }}>学员社群</a>
                            {" · "}
                            <a href={`${basePath}/about`} style={{ color: "var(--primary)" }}>关于我们</a>
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>© 2026 喜播集团. All Rights Reserved. 用科技分享人类智慧，让再小的生命也能吐露芬芳</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
