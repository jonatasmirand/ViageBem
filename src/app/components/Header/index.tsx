"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <h1 className={styles.header_logo}>
                    <Link href="/">ViageBem</Link>
                </h1>

                {/* Ícone hamburguer (mobile) */}
                <div className={styles.hamburguer} onClick={() => setOpen(!open)}>
                    ☰
                </div>

                {/* Menu */}
                <nav
                    className={`${styles.header_nav} ${open ? styles.nav_open : ""
                        }`}
                >
                    <Link href="/">Inicio</Link>
                    <Link href="/viagem/destinos">Destinos</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;