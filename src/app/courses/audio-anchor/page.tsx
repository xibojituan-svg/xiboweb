import styles from "../../page.module.css";

export const metadata = {
    title: "有声书演播训练营 - 喜播集团官方课程 | 零基础学配音 | 声音变现",
    description: "喜播集团官方有声书演播课程，由喜马拉雅一线导师授课。涵盖基础发音、情感表达、录音实战、后期制作及接单指导。助力零基础学员开启有声变现之路。",
};

export default function AudioAnchorPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <div className={styles.logoText}><a href="/">喜播集团</a></div>
                        <div className={styles.menu}>
                            <a href="/#courses">课程体系</a>
                            <a href="#intro">课程详情</a>
                            <a href="#curriculum">大纲</a>
                            <a href="#teacher">师资</a>
                        </div>
                        <a href="https://m.xibojiaoyu.com" className={styles.btnPrimaryNav} style={{ padding: '8px 20px', fontSize: '14px' }}>
                            领取体验课
                        </a>
                    </nav>
                </div>
            </header>

            <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #fff 0%, #fdf2ed 100%)', padding: '140px 0 80px' }}>
                <div className="container">
                    <span className={styles.badge}>喜马拉雅官方品牌 · 配音演播</span>
                    <h1 className={styles.heroTitle}>
                        有声演播<span>全能训练营</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        从 0 到 1 掌握专业演播技巧，官方平台资源背书，毕业即有机会签约喜马拉雅。
                    </p>
                </div>
            </section>

            <section id="intro" className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>课程亮点</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>🎯</div>
                            <h3>实战演练</h3>
                            <p>官方核心公版书目实操，拒绝纸上谈兵。</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>👨‍🏫</div>
                            <h3>名师指导</h3>
                            <p>行业一线大咖，手把手纠音指导。</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>💰</div>
                            <h3>变现通路</h3>
                            <p>直通喜马拉雅 A+ 有声制作平台，助力订单转化。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="curriculum" className={styles.section} style={{ background: '#f9fafb' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>课程大纲</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                        {[
                            { t: "第一阶段：魅力发声基石", d: "呼吸控制、共鸣调控、吐字归音专项训练" },
                            { t: "第二阶段：有声演播逻辑", d: "文本分析、重音停连、语调起伏深度解析" },
                            { t: "第三阶段：角色演播进阶", d: "多角色转换、人物小传撰写、录制空间营造" },
                            { t: "第四阶段：后期制作与运营", d: "干音处理、BGM 选配、主播 IP 打造与接单" }
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
                    <p>© 2026 喜播集团. 声音让生活更美好</p>
                </div>
            </footer>
        </div>
    );
}
