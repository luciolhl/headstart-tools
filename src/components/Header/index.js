import styles from './header.module.css'
import { Input } from 'antd'
const { Search } = Input

export default function Headers() {
  return (
    <div className={styles.header}>
      <Search
        placeholder="input search text"
        onSearch={() => {}}
        className={styles.search}
      />
    </div>
  )
}
