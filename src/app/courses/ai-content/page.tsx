import styles from "../../page.module.css";

export const metadata = {
    title: "AI 内容创作大师课 - 喜播集团官方课程 | AI 绘画 | AI 写作 | Midjourney | ChatGPT",
    description: "探索 AI 内容创作的无限可能。喜播集团 AI 课程带你掌握 AI 提示词、AI 绘画实战、AI 剧本写作及 AI 视频生成等前沿技术。助力学员实现内容产出的倍数级增长。",
};

export default function AIContentPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <div className={styles.logoText}><a href="/">喜播集团</a></div>
                        <div className={styles.menu}>
                            <a href="/#courses">主页</a>
                            <a href="#intro">课程特色</a>
                            <a href="#tools">主流工具</a>
                        </div>
                        <a href="https://m.xibojiaoyu.com" className={styles.btnPrimaryNav} style={{ padding: '8px 20px', fontSize: '14px' }}>
                            体验课程
                        </a>
                    </nav>
                </div>
            </header>

            <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #fdf2ed 0%, #fff 100%)', padding: '140px 0 80px' }}>
                <div className="container">
                    <span className={styles.badge}>前沿技术 · AI 赋能</span>
                    <h1 className={styles.heroTitle}>
                        AI 内容创作<span>大师训练营</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        从提示词技巧到全品类创作，用 AI 工具重塑你的生产力。
                    </p>
                </div>
            </section>

            <section id="intro" className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>未来已来</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>✍️</div>
                            <h3>AI 文笔写作</h3>
                            <p>系统学习 AI 小说、剧本及营销文案的高效产出方案。</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>🎨</div>
                            <h3>AI 视觉艺术</h3>
                            <p>掌握 Midjourney 等工具实现极致画面表现力。</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>📽️</div>
                            <h3>AI 视频生成</h3>
                            <p>学会用 AI 快速生成高质量视频素材，高效且低成本。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="curriculum" className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>课程核心模块</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                        {[
                            { t: "入门：Prompt 工程基础", d: "提示词结构解析、精准对话技巧、逻辑框架搭建" },
                            { t: "进阶：多模态内容生成", d: "AI 音乐、AI 绘画、AI 写作的协同工作流" },
                            { t: "实战：爆款项目落地", d: "AI 漫画、AI 数字人视频制作实案解析" },
                            { t: "运营：商业变现逻辑", d: "AI 带来的新职业机会、变现途径深度挖掘" }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '24px', background: 'white', borderRadius: '12px', marginBottom: '16px', border: '1px solid #eee' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Module 0{idx + 1}</h4>
                                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{item.t}</h3>
                                <p style={{ color: '#666' }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className={styles.section} style={{ borderTop: '1px solid #eee', padding: '60px 0' }}>
                <div className="container" style={{ textAlign: 'center', color: '#666' }}>
                    <p>© 2026 喜播集团. 连接 AI，开启创作新纪元</p>
                </div>
            </footer>
        </div>
    );
}
