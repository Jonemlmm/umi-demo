import { history } from 'umi';
import styles from './index.less';

const HomePage = () => {
  const handleLogin = () => {
    history.push('/login');
  };

  return (
    <div className={styles.container}>
      {/* 顶部导航栏 */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className={styles.navLinks}>
          <a href="#services">服务</a>
          <a href="#about">关于我们</a>
          <a href="#contact">联系我们</a>
        </div>
        <div className={styles.navRight}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="搜索..." />
          </div>
          <button onClick={handleLogin} className={styles.loginBtn}>登录</button>
        </div>
      </nav>

      {/* 头图区域 */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>欢迎来到我们的平台</h1>
          <p>发现更多可能，创造无限价值</p>
          <button className={styles.ctaButton}>立即开始</button>
        </div>
      </section>

      {/* 核心服务展示区 */}
      <section className={styles.services} id="services">
        <h2>我们的服务</h2>
        <div className={styles.serviceCards}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌟</div>
              <h3>服务{item}</h3>
              <p>这是服务{item}的详细描述，告诉用户我们能提供什么。</p>
            </div>
          ))}
        </div>
      </section>

      {/* 关于我们 */}
      <section className={styles.about} id="about">
        <h2>关于我们</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>我们是一家致力于提供优质服务的企业，始终以客户需求为导向。</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>1000+</h3>
                <p>服务客户</p>
              </div>
              <div className={styles.statItem}>
                <h3>50+</h3>
                <p>合作伙伴</p>
              </div>
              <div className={styles.statItem}>
                <h3>5年+</h3>
                <p>行业经验</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐内容区 */}
      <section className={styles.recommendations}>
        <h2>最新动态</h2>
        <div className={styles.newsGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.newsCard}>
              <div className={styles.newsImage}></div>
              <h3>新闻标题 {item}</h3>
              <p>这是新闻简短描述，介绍主要内容...</p>
              <a href="#">阅读更多</a>
            </div>
          ))}
        </div>
      </section>

      {/* 合作伙伴展示 */}
      <section className={styles.partners}>
        <h2>合作伙伴</h2>
        <div className={styles.partnerLogos}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={styles.partnerLogo}>
              Partner {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA区域 */}
      <section className={styles.cta}>
        <h2>准备好开始了吗？</h2>
        <p>立即联系我们，开启您的成功之旅</p>
        <button className={styles.ctaButton}>联系我们</button>
      </section>

      {/* 页脚 */}
      <footer className={styles.footer} id="contact">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>联系我们</h3>
            <p>邮箱：contact@example.com</p>
            <p>电话：123-456-7890</p>
            <p>地址：某某市某某区某某街道</p>
          </div>
          <div className={styles.footerSection}>
            <h3>快速链接</h3>
            <a href="#services">服务</a>
            <a href="#about">关于我们</a>
            <a href="#contact">联系我们</a>
          </div>
          <div className={styles.footerSection}>
            <h3>关���我们</h3>
            <div className={styles.socialLinks}>
              <a href="#">微信</a>
              <a href="#">微博</a>
              <a href="#">知乎</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 公司名称. 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
