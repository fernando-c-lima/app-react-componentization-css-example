import styles from "./Cars.module.css";

const Cars = ({ cars }) => {
  return (
    <div className={styles.card}>
      <h2>{cars.brand}</h2>
      <p>KM: {cars.km}</p>
      <p>Cor: {cars.color}</p>
    </div>
  );
};

export default Cars;
