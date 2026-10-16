import { StationItem } from "@/types/StationItem";

export const mockStations: StationItem[] = [
  {
    id: "1",
    name: "Cairo Main Branch",
    channelId: "1000",
    location: "Nasr City, Cairo, Egypt",
    description:
      "Main branch responsible for customer support and daily operations.",
    status: "active",
  },
  {
    id: "2",
    name: "Alexandria Branch",
    channelId: "1001",
    location: "Smouha, Alexandria, Egypt",
    description:
      "Regional branch providing services to customers across Alexandria.",
    status: "inactive",
  },
  {
    id: "3",
    name: "Giza Branch",
    channelId: "1002",
    location: "Dokki, Giza, Egypt",
    description:
      "Branch focused on managing local customer requests and inquiries.",
    status: "inactive",
  },
  {
    id: "4",
    name: "Mansoura Branch",
    channelId: "1003",
    location: "El Gomhoria Street, Mansoura, Egypt",
    description:
      "Active branch handling sales, support, and customer relationships.",
    status: "active",
  },
  {
    id: "5",
    name: "Ismailia Branch",
    channelId: "1004",
    location: "El Sultan Hussein Street, Ismailia, Egypt",
    description:
      "Local branch serving customers and coordinating regional operations.",
    status: "active",
  },
  {
    id: "6",
    name: "Tanta Branch",
    channelId: "1005",
    location: "Saad Zaghloul Street, Tanta, Egypt",
    description:
      "Branch temporarily unavailable while internal operations are being updated.",
    status: "inactive",
  },
  {
    id: "7",
    name: "Hurghada Branch",
    channelId: "1006",
    location: "Sheraton Road, Hurghada, Egypt",
    description:
      "Branch providing services and assistance to customers in the Red Sea region.",
    status: "active",
  },
];
