import Grid from "./components/Grid";
import Title from "./components/Title";
import Link from "next/link";
import { viagens } from '@/app/lib/viagens';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>

      <Title title="ViageBem" />
      <section className={styles.home}>
        <h2>Bem-vindo ao Portal de Viagens</h2>
        <p>Descubra destinos incríveis pelo mundo!</p>
      </section>
      <Link className={styles.button} href="../viagem/destinos" >Ver Destinos</Link>
      <Grid viagens={viagens} variant="inicial" />
    </main>
  );
}
