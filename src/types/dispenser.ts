export interface DispenserItem {
  id: string;
  name: string;
  channelId: string;
  station: string;
  line: string;
  order: string;
  position: string;
  status: "active" | "inactive";
}