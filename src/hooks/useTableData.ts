import { useState } from "react";

export function useTableData<T extends { id: string }>(initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);

  function filter(id: string) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  function addItem(newItem: T) {
    setData((prev) => [...prev, newItem]);
  }

  return {
    data,
    filter,
    addItem,
    setData,
  };
}
