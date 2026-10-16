export interface StationItem {
  id: string;
  name: string;
  channelId: string;
  location: string;
  description: string;
  status: "active" | "inactive";
}