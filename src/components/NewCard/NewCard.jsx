// import "./NewsCard.css";
import styles from "./NewsCard.module.css";
// CSS Module
// CSS를 객체화 하여 컴포넌트별로 분리할 수 있다
export default function NewsCard({
  source,
  author,
  publishedAt,
  title,
  description,
  url,
  urlToImage,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={urlToImage} alt={title} />
        <span className={styles.badge}>{source.name}</span>
      </div>

      <div className={styles.content}>
        <div className="meta">
          <span className={styles.author}>{author}</span>
          <span>{source.name}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.timestamp}>{publishedAt}</span>
        <a className={styles.link} href={url} target="_blank">
          기사 읽기
        </a>
      </div>
    </article>
  );
}
