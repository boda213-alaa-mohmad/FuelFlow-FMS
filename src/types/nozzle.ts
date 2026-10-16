export interface NozzleItem {
  id: string;
  name: string;
  channelId: string;
  station: string;
  dispenser: string;
  status: "active" | "inactive";
}