import { useState } from "react";

export function useTableData<T extends { id: string }>(initialData: T[]) {
  const [data, setData] = useState(initialData);

  function filter(id: string) {
    setData((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      }),
    );
  }

  return {
    data,
    filter,
  };
}
