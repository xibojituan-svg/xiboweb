import styles from "./page.module.css";
import Link from "next/link";

// 本地开发不需要路径前缀，生产环境（GitHub Pages）需要
const basePath = "";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container" style={{ width: '100%' }}>
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

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>喜播集团 2026 全新战略</span>
          <h1 className={styles.heroTitle}>
            打造中国最受信赖的<br />
            <span>个人财富与健康平台</span>
          </h1>
          <p className={styles.heroDesc}>
            从职业技能教育全面向长期健康生活方式延展，依靠专业教研与 TLC 循证医学支撑，我们立志帮助 1000 万名女性实现个人能力的提升与家庭健康的改善。
          </p>
          <div className={styles.ctaGroup}>
            <a href="#business" className={styles.btnPrimary}>探索我们的服务</a>
            <a href="#about" className={styles.btnSecondary}>了解战略愿景</a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="business" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>多元化服务生态</h2>
            <p className={styles.sectionSubtitle}>以教育赋能成长，以健康滋养生活，构建长效陪伴的信任网络</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📚</div>
              <h3>喜播教育</h3>
              <p>坚持“价值交付”本质，提供高质量的职业技能与内容创作培训，帮助学员实现个人能力的真实成长与长效发展。</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🌿</div>
              <h3>喜播健康</h3>
              <p>以 TLC 生活方式医学为基石，通过科学的运动与营养指导，帮助女性从内而外实现真实的健康改善与生活幸福。</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🧠</div>
              <h3>科技赋能体验</h3>
              <p>运用领先的人工智能与数字化技术，为学员与用户提供更加智能化、个性化的学习与健康管理体验。</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.section} style={{ background: '#f9fafb', borderTop: '1px solid #eee', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', color: '#666' }}>
          <p>© 2026 喜播集团. All Rights Reserved. 中国个人财富与健康服务生态开创者</p>
        </div>
      </footer>
    </div>
  );
}
