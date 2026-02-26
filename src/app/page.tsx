import styles from "./page.module.css";
import Link from "next/link";

// 本地开发不需要路径前缀，生产环境（GitHub Pages）需要
const basePath = process.env.NODE_ENV === "production" ? "/xiboweb" : "";

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
            从“狩猎式”商业模式全面向长期健康转型，依靠 TLC 生活方式医学与强大的数据支撑，我们立志帮助 1000 万名女性成为家庭健康掌门人。
          </p>
          <div className={styles.ctaGroup}>
            <a href="#business" className={styles.btnPrimary}>探索双曲线业务</a>
            <a href="#about" className={styles.btnSecondary}>了解战略愿景</a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="business" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>双曲线共生生态</h2>
            <p className={styles.sectionSubtitle}>重构商业土壤，追求高依从性与分布式信任网络</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📚</div>
              <h3>第一曲线：教育培训</h3>
              <p>改造为“无毒现金牛”，严格遏制夸大承诺，回归真实的“价值交付”本质，为整个生态输送高质量人才与正向现金流。</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🌿</div>
              <h3>第二曲线：健康生活</h3>
              <p>以 TLC 生活方式医学为基石，转动健康飞轮。通过真实改善与口碑见证，打造强信任的幸福生活圈层。</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🧠</div>
              <h3>能力底座：AI 与中台</h3>
              <p>双曲线共享强大的数字化技术与数据中台引擎，以 AI 赋能效率，精准突破用户依从性管理的终极难题。</p>
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
