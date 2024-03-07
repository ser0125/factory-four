import { useCallback, useEffect, useState } from "react";
import { Apis } from "@/interfaces/Apis";
import axios from "axios";

const useFetchApi = (ENDPOINTS: string[], INTERVAL_TIME: number) => {
  const [apis, setApis] = useState<Apis>();
  const fetchApi = async (endpoint: string) => {
    const url = `https://api.factoryfour.com/${endpoint}/health/status`;
    try {
      const { data } = await axios.get(url);
      setApis((previousState) => ({
        ...previousState,
        [endpoint]: data,
      }));
    } catch (e: any) {
      if (typeof e?.response === "undefined") {
        setApis((previousState) => ({
          ...previousState,
          [endpoint]: {
            success: false,
            message: "Error",
            error: { status: 503, message: e.message },
          },
        }));
      } else {
        setApis((previousState) => ({
          ...previousState,
          [endpoint]: { success: false, message: "Error", error: e },
        }));
      }
    }
  };

  const getAllStatus = useCallback(async () => {
    ENDPOINTS.forEach(async (endpoint) => await fetchApi(endpoint));
  }, []);

  useEffect(() => {
    getAllStatus();
    const interval = setInterval(() => {
      getAllStatus();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [getAllStatus, INTERVAL_TIME]);

  return apis;
};

export default useFetchApi;
