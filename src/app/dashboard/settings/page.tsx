import { cookies } from "next/headers";
import SettingsContent from "@/components/settings/settingsContext";

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const userEmail =
    cookieStore.get("user_email")?.value || "john.doe@example.com";
  const userName = cookieStore.get("user_name")?.value || "John Doe";

  const userData = {
    email: userEmail,
    fullName: userName,
  };

  return <SettingsContent user={userData} />;
}
