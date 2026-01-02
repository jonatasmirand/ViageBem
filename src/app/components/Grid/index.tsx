import { Viagem } from "@/types/type"
import styles from './Grid.module.css'
import Card from "../Card";

type Props = {
    viagens: Viagem[]
    variant?: "inicial" | "destino";
}

export default function Grid({ viagens, variant = "inicial" }: Props) {
    return (
        <section className={styles.grid}>
            {viagens.map(v => (
                <Card key={v.id} viagem={v} variant={variant} />
            ))}
        </section>
    );
}
