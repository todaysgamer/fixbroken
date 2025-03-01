// components/ProgressBar.js

import { useEffect, useState } from 'react';
import Router from 'next/router';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return loading ? <div className={styles.progressBar} /> : null;
};

export default ProgressBar;
