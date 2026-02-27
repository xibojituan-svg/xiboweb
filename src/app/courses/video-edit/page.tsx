import styles from "../../page.module.css";

export const metadata = {
    title: "创作剪辑训练营 - 喜播集团官方课程 | 短视频剪辑 | 影视后期 | 剪映实战",
    description: "喜播集团官方影视剪辑课程。提供从脚本创作、分镜设计到特效剪辑、后期调色及短视频运营的全方位培训。助力学员轻松上手，快速从小白成长为专业短视频制作人。",
};

export default function VideoEditPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <div className={styles.logoText}><a href="/">喜播集团</a></div>
                        <div className={styles.menu}>
                            <a href="/#courses">首页项目</a>
                            <a href="#intro">课程详情</a>
                            <a href="#curriculum">实操内容</a>
                        </div>
                        <a href="https://m.xibojiaoyu.com" className={styles.btnPrimaryNav} style={{ padding: '8px 20px', fontSize: '14px' }}>
                            咨询课程
                        </a>
                    </nav>
                </div>
            </header>

            <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #152445 0%, #1a1a1a 100%)', color: 'white', padding: '140px 0 80px' }}>
                <div className="container">
                    <span className={styles.badge} style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>视觉创作 · 剪辑实操</span>
                    <h1 className={styles.heroTitle} style={{ color: 'white' }}>
                        新媒体<span>视觉创作课</span>
                    </h1>
                    <p className={styles.heroDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        紧扣短视频时代核心需求，掌握主流剪辑工具，从技术实操到运营变现，全链条成长。
                    </p>
                </div>
            </section>

            <section id="intro" className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>掌握核心竞争力</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>🎬</div>
                            <h3>思维突破</h3>
                            <p>掌握电影级镜头语言，不仅会剪辑，更懂讲故事。</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>💻</div>
                            <h3>全工具覆盖</h3>
                            <p>深入学习剪映、PR 等主流软件的高阶玩法。</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>📈</div>
                            <h3>运营赋能</h3>
                            <p>实战拆解爆款模型，教你打造具备商业价值的账号。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="curriculum" className={styles.section} style={{ background: '#f9fafb' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>课程核心模块</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                        {[
                            { t: "初阶：剪辑逻辑与基础", d: "软件安装环境、基本剪辑流程、素材整理技巧" },
                            { t: "中阶：镜头美学与调色", d: "色彩科学、分镜构图、音乐节奏卡点技术" },
                            { t: "高阶：特效制作与合成", d: "关键帧动画、遮罩黑科技、音效转场进阶" },
                            { t: "终极：商业运营实战", d: "账号定位解析、文案脚本编写、内容发布运营" }
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
                    <p>© 2026 喜播集团. 记录精彩，从第一帧开始</p>
                </div>
            </footer>
        </div>
    );
}
