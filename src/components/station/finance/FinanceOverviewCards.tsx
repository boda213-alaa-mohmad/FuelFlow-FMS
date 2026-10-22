import { Wallet, Tag, Repeat } from "lucide-react";

export default function FinanceOverviewCards() {
  const cards = [
    {
      title: "Total Value",
      value: "71,028",
      unit: "EGP",
      icon: Wallet,
      isHighlighted: true,
    },
    {
      title: "Total Sales",
      value: "20,000",
      unit: "m³",
      icon: Tag,
      isHighlighted: false,
    },
    {
      title: "Avg Sales",
      value: "20,000",
      unit: "m³",
      icon: Tag,
      isHighlighted: false,
    },
    {
      title: "Transaction Count",
      value: "1567",
      unit: "",
      icon: Repeat,
      isHighlighted: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`p-5 rounded-2xl border shadow-sm space-y-3 transition hover:shadow-md ${
              card.isHighlighted
                ? "bg-[#FDF2F0] border-orange-100"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-bold text-slate-800">
                {card.value}
              </h3>
              {card.unit && (
                <span className="text-xs font-semibold text-slate-500">
                  {card.unit}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <Icon size={16} className="text-[#FF7A59]" />
              <span className="text-xs font-bold text-slate-700">
                {card.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
