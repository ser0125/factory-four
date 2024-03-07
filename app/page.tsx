"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "@/components/CardContainer";
import { Apis } from "@/interfaces/Apis";

const endpoints = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

export default function Dashboard() {
  const [apis, setApis] = useState<Apis>();

  const fetchApi = async (endpoint: string) => {
    const url = `https://api.factoryfour.com/${endpoint}/health/status`;
    try {
      const { data } = await axios.get(url);
      setApis((previousState) => ({
        ...previousState,
        [endpoint]: data,
      }));
    } catch (e) {
      setApis((previousState) => ({
        ...previousState,
        [endpoint]: { success: false, message: "Error" },
      }));
    }
  };

  const getAllStatus = useCallback(async () => {
    endpoints.forEach(async (endpoint) => await fetchApi(endpoint));
  }, []);

  useEffect(() => {
    getAllStatus();
    const interval = setInterval(() => {
      getAllStatus();
    }, 15000);
    return () => clearInterval(interval);
  }, [getAllStatus]);

  return (
    <>
      {apis &&
        Object.keys(apis).map((name: string, index: number) => {
          return (
            <CardContainer key={name + index} name={name} data={apis[name]} />
          );
        })}
    </>
  );
}
