import type { Metadata } from "next";
import styles from "../page.module.css";
import comStyles from "./community.module.css";

/* ─── SEO & GEO Metadata ─── */
export const metadata: Metadata = {
    title: "学员社群 - 喜播集团 | 优秀学员展示 | 创作者社区 | 喜播活动",
    description:
        "加入喜播学员社群，遇见10万+名正在用声音、视频和AI改变生活的创作者。查看优秀学员作品和收益成果，参与线上线下活动，感受真实的社区温度。",
    keywords:
        "喜播学员, 喜播社群, 学员作品展示, 创作者社区, 声音主播学员, 短视频学员案例, 喜播活动",
    openGraph: {
        title: "喜播学员社群 | 10万+创作者在这里相遇",
        description:
            "喜播学员社群汇聚了来自全国的声音主播、短视频创作者和AI内容创作者。他们分享真实的变现历程、互相激励成长，这里是你开始改变的最好理由。",
        type: "website",
        locale: "zh_CN",
        siteName: "喜播集团",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CommunityForum",
    name: "喜播学员社群",
    description: "喜播集团学员交流与成果展示社区，汇聚10万+声音主播、短视频创作者和AI内容创作者，分享真实变现成果、互动打卡、参与线下活动。",
    url: "https://xibojituan-svg.github.io/xiboweb/community",
    parentOrganization: { "@type": "Organization", name: "喜播集团" },
};

const basePath = "";

/* ─── 学员数据 ─── */
const students = [
    {
        name: "林晓燕",
        tag: "声音主播",
        tagColor: "#f4621c",
        avatar: "🎙️",
        location: "广东广州",
        income: "月均收益 ¥4,200",
        platform: "喜马拉雅",
        quote: "入学前觉得自己声音条件一般，班主任说条件不重要，心意到了才是关键。三个月后我的故事集在喜马拉雅突破10万播放。",
        works: ["《夏日光年》有声小说", "职场情感专辑", "亲子睡前故事"],
        highlight: "10万+播放",
    },
    {
        name: "王思宇",
        tag: "短视频创作",
        tagColor: "#7c3aed",
        avatar: "🎬",
        location: "浙江杭州",
        income: "月均收益 ¥6,800",
        platform: "抖音",
        quote: "我是IT行业出身，觉得自己完全不懂内容。没想到课程的选题框架让我第一条视频就上了热门推荐，账号三个月涨粉8万。",
        works: ["职场生存技巧系列", "程序员的反常识", "副业变现攻略"],
        highlight: "8万+粉丝",
    },
    {
        name: "陈静瑜",
        tag: "AI内容创作",
        tagColor: "#0891b2",
        avatar: "🤖",
        location: "上海",
        income: "月均收益 ¥9,500",
        platform: "小红书",
        quote: "AI工具让我告别了内容焦虑。现在每天用AI辅助产出5-8篇内容，小红书账号接单量翻了5倍，还开了自己的AI写作课咨询服务。",
        works: ["AI创作方法论", "内容矩阵搭建实战", "副业收益月报"],
        highlight: "5倍接单量",
    },
    {
        name: "赵美慧",
        tag: "声音主播",
        tagColor: "#f4621c",
        avatar: "🎙️",
        location: "北京",
        income: "月均收益 ¥3,600",
        platform: "酷狗音乐",
        quote: "全职妈妈三年后重新走进职场让我很焦虑，声音主播课给了我一个从家出发的起点。现在每晚孩子睡后录音，自己的时间有了价值。",
        works: ["妈妈的声音故事集", "情感疗愈音频", "国学诵读专辑"],
        highlight: "首月变现",
    },
    {
        name: "刘建峰",
        tag: "短视频创作",
        tagColor: "#7c3aed",
        avatar: "🎬",
        location: "四川成都",
        income: "月均收益 ¥12,000",
        platform: "抖音 + 视频号",
        quote: "餐饮店老板做短视频，没想到比开店更赚钱。课里学的本地生活运营逻辑太实用了，现在店里的探店视频带来70%的新客流量。",
        works: ["成都美食探店系列", "餐饮创业心得", "本地生活运营课"],
        highlight: "70%新客转化",
    },
    {
        name: "孙碧云",
        tag: "AI内容创作",
        tagColor: "#0891b2",
        avatar: "🤖",
        location: "江苏南京",
        income: "月均收益 ¥5,200",
        platform: "公众号 + 知识星球",
        quote: "我是英语老师，AI课让我把专业知识和AI工具结合，开了英语学习AI应用的专题号，学员付费社群两个月就有了300人。",
        works: ["AI学英语实战", "ChatGPT教学设计", "语言学习效率工具包"],
        highlight: "300人付费社群",
    },
];

/* ─── 互动统计 ─── */
const communityStats = [
    { icon: "👥", value: "10万+", label: "社群成员" },
    { icon: "🏆", value: "3,200+", label: "变现成功学员" },
    { icon: "💬", value: "每日1000+", label: "社群互动消息" },
    { icon: "🎯", value: "98%", label: "打卡完成率" },
];

/* ─── 近期活动 ─── */
const activities = [
    {
        icon: "🎙️",
        date: "2026年3月8日",
        type: "线上直播",
        title: "女神节特别场：声音创业的温柔力量",
        desc: "5位优秀女性学员分享声音变现之路，直播间互动送课程福利。",
        status: "即将开始",
        statusColor: "#16a34a",
        tag: "声音主播",
    },
    {
        icon: "🎬",
        date: "2026年3月15日",
        type: "线上工作坊",
        title: "爆款短视频选题公式 2026 全新升级版",
        desc: "AI辅助选题+人工精修，带你批量产出热门内容，限额50人。",
        status: "报名中",
        statusColor: "#f59e0b",
        tag: "短视频",
    },
    {
        icon: "🤖",
        date: "2026年3月22日",
        type: "线上分享",
        title: "AI工具大测评：哪些值得付费，哪些不值一提",
        desc: "资深AI创作者主理，实测20+主流AI工具，帮你省下踩坑的钱和时间。",
        status: "报名中",
        statusColor: "#f59e0b",
        tag: "AI创作",
    },
    {
        icon: "🌟",
        date: "2026年4月5日",
        type: "线下沙龙",
        title: "上海・喜播学员创作者面对面",
        desc: "上海站线下社群聚会，学员作品展览+圆桌交流+喜播年度大奖揭晓。",
        status: "敬请期待",
        statusColor: "#6b7280",
        tag: "线下活动",
    },
];

/* ─── 打卡墙数据 ─── */
const checkins = [
    { name: "Mia", day: 23, text: "今天完成了第3章有声书录制，声音越来越稳了！💪", avatar: "🌸" },
    { name: "小峰", day: 14, text: "抖音第一条视频破万播放！课里学的钩子开头太有用了！", avatar: "🚀" },
    { name: "云姐", day: 31, text: "连续打卡一个月！本月收入3800元，感谢同学们的支持！", avatar: "⭐" },
    { name: "Jack", day: 8, text: "AI写作今天产出了8篇高质量内容，效率感真的不一样！", avatar: "🤖" },
    { name: "晓燕妈", day: 19, text: "睡前给孩子讲的故事被粉丝说超治愈，哭了🥹", avatar: "💕" },
    { name: "阿成", day: 45, text: "45天打卡！账号粉丝破了5万！我要继续冲！", avatar: "🔥" },
    { name: "小美", day: 7, text: "第一周打卡完成！声音练习每天进步一点点，加油！", avatar: "🌱" },
    { name: "老刘", day: 28, text: "探店视频带来了120桌新预约，这就是学习的价值！", avatar: "🍜" },
];

export default function CommunityPage() {
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
                                <a href={`${basePath}/community`} style={{ color: "var(--primary)", fontWeight: 700 }}>学员社群</a>
                                <a href={`${basePath}/about`}>关于我们</a>
                            </div>
                            <a href="https://m.xibojiaoyu.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryNav}>
                                加入社群
                            </a>
                        </nav>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section className={comStyles.hero}>
                    <div className={comStyles.heroParticles} aria-hidden="true">
                        {["🎙️", "🎬", "🤖", "⭐", "🚀", "💪", "🌸", "🔥"].map((e, i) => (
                            <span key={i} className={comStyles.particle} style={{ animationDelay: `${i * 0.4}s`, left: `${10 + i * 11}%` }}>{e}</span>
                        ))}
                    </div>
                    <div className="container">
                        <div className={comStyles.heroBadge}>🌟 喜播学员社群 · 10万+创作者在这里相遇</div>
                        <h1 className={comStyles.heroTitle}>
                            从普通人到<span>创作者</span>，<br />
                            这里是你<span>改变的起点</span>
                        </h1>
                        <p className={comStyles.heroDesc}>
                            声音主播、短视频创作者、AI内容创作者——无论你选择哪条路，<br />
                            社群里都有和你一起走过的同行者，以及走在你前面愿意回头拉你的人。
                        </p>
                        <div className={comStyles.heroStats}>
                            {communityStats.map((s, i) => (
                                <div key={i} className={comStyles.heroStatItem}>
                                    <span className={comStyles.heroStatIcon}>{s.icon}</span>
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="#students" className={styles.btnPrimary}>看看他们的故事</a>
                            <a href="#activities" className={styles.btnSecondary}>查看活动安排</a>
                        </div>
                    </div>
                </section>

                {/* ── 优秀学员展示 ── */}
                <section id="students" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>他们都是普通人</h2>
                            <p className={styles.sectionSubtitle}>和你一样从零开始，用内容创作找到了属于自己的那条路</p>
                        </div>
                        <div className={comStyles.studentGrid}>
                            {students.map((s, i) => (
                                <article key={i} className={comStyles.studentCard}>
                                    <div className={comStyles.studentTop}>
                                        <div className={comStyles.studentAvatar}>{s.avatar}</div>
                                        <div className={comStyles.studentInfo}>
                                            <strong className={comStyles.studentName}>{s.name}</strong>
                                            <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
                                                <span className={comStyles.studentTag} style={{ background: `${s.tagColor}18`, color: s.tagColor }}>{s.tag}</span>
                                                <span className={comStyles.studentLocation}>📍 {s.location}</span>
                                            </div>
                                        </div>
                                        <div className={comStyles.studentHighlight}>{s.highlight}</div>
                                    </div>
                                    <blockquote className={comStyles.studentQuote}>&ldquo;{s.quote}&rdquo;</blockquote>
                                    <div className={comStyles.studentMeta}>
                                        <div className={comStyles.studentIncome}>
                                            <span>💰</span>
                                            <span>{s.income}</span>
                                        </div>
                                        <div className={comStyles.studentPlatform}>
                                            <span>📱 {s.platform}</span>
                                        </div>
                                    </div>
                                    <div className={comStyles.studentWorks}>
                                        <span className={comStyles.worksLabel}>代表作品</span>
                                        <div className={comStyles.worksList}>
                                            {s.works.map((w, j) => (
                                                <span key={j} className={comStyles.workItem}>✦ {w}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 每日打卡墙 ── */}
                <section id="checkin" className={styles.section} style={{ background: "#f9fafb" }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>今日打卡墙</h2>
                            <p className={styles.sectionSubtitle}>每一次打卡都是真实的进步，社群见证每个人的成长轨迹</p>
                        </div>
                        <div className={comStyles.checkinGrid}>
                            {checkins.map((c, i) => (
                                <div key={i} className={comStyles.checkinCard}>
                                    <div className={comStyles.checkinHeader}>
                                        <span className={comStyles.checkinAvatar}>{c.avatar}</span>
                                        <div>
                                            <strong>{c.name}</strong>
                                            <span className={comStyles.checkinDay}>连续打卡 {c.day} 天 🔥</span>
                                        </div>
                                    </div>
                                    <p className={comStyles.checkinText}>{c.text}</p>
                                    <div className={comStyles.checkinActions}>
                                        <button className={comStyles.likeBtn}>👍 点赞</button>
                                        <button className={comStyles.commentBtn}>💬 回复</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: "center", marginTop: 40 }}>
                            <a href="https://m.xibojiaoyu.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                加入打卡挑战 →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── 近期活动 ── */}
                <section id="activities" className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>近期活动</h2>
                            <p className={styles.sectionSubtitle}>线上工作坊、直播分享、线下沙龙，持续更新中</p>
                        </div>
                        <div className={comStyles.activityList}>
                            {activities.map((a, i) => (
                                <article key={i} className={comStyles.activityCard}>
                                    <div className={comStyles.activityLeft}>
                                        <div className={comStyles.activityIcon}>{a.icon}</div>
                                        <div className={comStyles.activityDate}>
                                            <strong>{a.date.replace("2026年", "")}</strong>
                                            <span>{a.type}</span>
                                        </div>
                                    </div>
                                    <div className={comStyles.activityMain}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                                            <h3 className={comStyles.activityTitle}>{a.title}</h3>
                                            <span className={comStyles.activityTag}>{a.tag}</span>
                                        </div>
                                        <p className={comStyles.activityDesc}>{a.desc}</p>
                                    </div>
                                    <div className={comStyles.activityRight}>
                                        <span className={comStyles.activityStatus} style={{ color: a.statusColor, background: `${a.statusColor}14` }}>
                                            {a.status}
                                        </span>
                                        {a.status !== "敬请期待" && (
                                            <a href="https://m.xibojiaoyu.com" target="_blank" rel="noopener noreferrer" className={comStyles.activityBtn}>
                                                立即报名
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 加入社群 CTA ── */}
                <section className={comStyles.joinSection}>
                    <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                        <div className={comStyles.joinIcon}>🎉</div>
                        <h2 className={comStyles.joinTitle}>你只差一步</h2>
                        <p className={comStyles.joinDesc}>
                            加入喜播学员社群，和10万+内容创作者一起，<br />
                            找到属于你自己的那条变现之路。
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="https://m.xibojiaoyu.com" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                免费加入学员社群
                            </a>
                            <a href={`${basePath}/education`} className={comStyles.joinAltBtn}>
                                了解课程体系 →
                            </a>
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
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>© 2026 喜播集团. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
