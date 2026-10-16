export interface CompressorItem {
  id: string;
  name: string;
  channelId: string;
  station: string;
  status: "active" | "inactive";
}
