import styles from './products.module.css';

export function Products() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <p>
        This is a change.
        <span role="img" aria-label="This is a change.">
          👋
        </span>
      </p>
    </div>
  );
}

export default Products;
