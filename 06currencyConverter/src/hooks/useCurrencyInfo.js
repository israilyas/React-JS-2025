import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((res) => {
        if (res[currency]) {
          setData(res[currency]);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;