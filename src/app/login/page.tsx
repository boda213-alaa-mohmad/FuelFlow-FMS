import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Login() {
  return (
    // container
    <div className={styles.container}>
      {/* LEFT SECTION  */}
      <div className={styles["left-section"]}>
        <div className={styles.content}>
          <h1 className={styles.header}>WELCOME TO FMS</h1>
          <p className={styles.desc}>
            Ask the admin to create an account for you to start viewing our
            Dashboards.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-[#3d5161] text-[#3d5161] bg-transparent hover:bg-[#3d5161] hover:text-white px-8 py-6"
          >
            Request Account
          </Button>
        </div>
      </div>
      {/* RIGHT SECTION */}
      <div className={styles["right-section"]}>
        <form className={styles.form}>
          <Image
            src="/brk-logo-trandy.png"
            alt="logo TAQA"
            width={150}
            height={150}
          />

          <div className={styles.inputsContainer}>
            <input
              type="text"
              placeholder="user@example.com"
              className={styles.input}
            />

            <input
              type="password"
              placeholder="password"
              className={styles.input}
            />

            <Button
              variant="white"
              size="lg"
              className="mt-4 px-8 py-6 rounded-2xl"
            >
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
