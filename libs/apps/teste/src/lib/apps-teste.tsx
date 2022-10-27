import styles from './apps-teste.module.css';

/* eslint-disable-next-line */
export interface AppsTesteProps {}

export function AppsTeste(props: AppsTesteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppsTeste!</h1>
    </div>
  );
}

export default AppsTeste;
