'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from './Card.module.css';
import { Viagem } from "@/types/type";

type Props = {
    viagem: Viagem;
    variant?: "inicial" | "destino"; 
};

function Card({ viagem, variant = "inicial" }: Props) {
    const { title, imagem, description } = viagem;

    return (
        <motion.div
            className={`${styles.card} ${styles[variant]}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Image
                src={imagem}
                alt={title}
                width={300}
                height={300}
                quality={60}
                priority
                sizes="(max-width: 768px) 100vw, 300px"
            />

            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
}

export default React.memo(Card);