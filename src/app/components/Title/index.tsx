import styles from './Title.module.css'
import React from 'react'

type Props ={
    title: string;
}

const Title = ({title}: Props) =>{
    return(
        <>
        <h2 className={styles.title}>{title}</h2>
        </>
    )
}

export default React.memo( Title);