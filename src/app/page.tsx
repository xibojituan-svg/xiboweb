import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.logoText}>喜播教育</div>
            <div className={styles.menu}>
              <a href="#courses">精品课程</a>
              <a href="#about">关于我们</a>
              <a href="#news">行业资讯</a>
              <a href="#contact">联系我们</a>
            </div>
            <a href="https://m.xibojiaoyu.com" className={styles.btnPrimary} style={{ padding: '8px 20px', fontSize: '14px' }}>
              立即开启
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>喜马拉雅旗下官方品牌</span>
          <h1 className={styles.heroTitle}>
            用声音连接世界，<br />
            <span>开启职业新可能</span>
          </h1>
          <p className={styles.heroDesc}>
            专注新职业教育，提供有声演播、短视频剪辑、AI 内容创作等体系化课程，助力 1000 万学员实现技能变现与自我成长。
          </p>
          <div className={styles.ctaGroup}>
            <a href="#courses" className={styles.btnPrimary}>浏览课程体系</a>
            <a href="#about" className={styles.btnSecondary}>了解喜播故事</a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="courses" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>核心课程体系</h2>
          <div className={styles.grid}>
            <a href="/courses/audio-anchor" className={styles.card}>
              <div className={styles.cardIcon}>🎙️</div>
              <h3>有声主播演播</h3>
              <p>喜马拉雅资深导师授课，涵盖基础发音、情感表达、后期制作等全流程培训。</p>
            </a>
            <a href="/courses/video-edit" className={styles.card}>
              <div className={styles.cardIcon}>✂️</div>
              <h3>短视频/影视剪辑</h3>
              <p>零基础解锁剪辑黑科技，掌握从脚本策划到后期剪辑的全栈技能。</p>
            </a>
            <a href="/courses/ai-content" className={styles.card}>
              <div className={styles.cardIcon}>🤖</div>
              <h3>AI 内容创作</h3>
              <p>紧跟前沿趋势，学习 AI 绘画、AI 写作及 AI 视频生成的实战应用。</p>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.section} style={{ background: '#f9fafb', borderTop: '1px solid #eee', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', color: '#666' }}>
          <p>© 2026 喜播教育. All Rights Reserved. 喜马拉雅旗下新职业平台</p>
        </div>
      </footer>
    </div>
  );
}
