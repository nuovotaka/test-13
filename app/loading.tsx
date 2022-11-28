import React from 'react'
import styles from '../styles/loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.bar}></div>
    </div>
  )
}

export default React.memo(Loading)