/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useApiService(apiServiceCallback, options = {}) {
  const { defaultValue = [], dependencies = [] } = options;
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const responseData = apiServiceCallback();
    setData(responseData);
  }, [dependencies]);

  return [data, setData];
}
