import Link from 'next/link'
import React from 'react'

import styles from './PostLink.module.css'
function PostLink({ post }) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={'https:' + post.fields.heroImage.fields.file.url} />
            <div className={styles.right}>
                <h2 className={styles.title}>{post.fields.title}</h2>
                <h3 className={styles.subtitle}>{post.fields.subtitle || 'Madre y Docente'}</h3>
                <p className={styles.description}>{post.fields.description}</p>
                <Link href={`/mujeres/${post.fields.slug}`}><a className={styles.keepReading} href={`/mujeres/${post.fields.slug}`}>Continuar Leyendo →</a></Link>
            </div>
        </div>
    )
}

export default PostLink
