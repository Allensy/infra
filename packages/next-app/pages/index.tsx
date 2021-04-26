import Head from 'next/head'
import { component, Header } from 'components';
import styles from '../styles/Home.module.css';

component()
export default function Home() {
    return (
        <div className={styles.container}>
            <Header text="ballen" />
        </div>
    )
}
