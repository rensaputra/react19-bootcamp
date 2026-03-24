import styles from "./page.module.css";
import Link from "next/link";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/">Home Page</Link>
      <Link href="/about">About Page</Link>
      <Link href="/products">Products Page</Link>
      <Counter />
    </div>
  );
}
