"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>Page not found</h2>
        <Button
          variant="white"
          size="lg"
          className="mt-4 px-8 py-6 rounded-2xl"
          onClick={() => router.back()}
        >
          Go to previous page
        </Button>
      </div>
    </div>
  );
}
