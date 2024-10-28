import { useState } from 'react';
import { history } from 'umi';
import styles from './login.less';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加登录逻辑
    console.log('登录信息：', username, password);
    // 登录成功后跳转到首页
    history.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>用户登录</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="用户名"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="密码"
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            登录
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
