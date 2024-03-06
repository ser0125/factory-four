"use client";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [apis, setApis] = useState({});

  const fetchApi = async (endpoint: string) => {
    const url = `https://api.factoryfour.com/${endpoint}/health/status`;
    try {
      const { data } = await axios.get(url);
      setApis((previousState) => ({
        ...previousState,
        [endpoint]: data,
      }));
    } catch (e) {
      console.log(e);
      setApis((previousState) => ({
        ...previousState,
        [endpoint]: { success: false, message: 'Error' },
      }));
    }
  };

  const getAllStatus = async () => {
    endpoints.forEach(async (endpoint) => await fetchApi(endpoint));
  };

  useEffect(() => {
    getAllStatus();
    const interval = setInterval(() => {
      getAllStatus();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {endpoints.map((name, index) => {
        return (
          <>
            <h1 key={name + index}>{name}</h1>
            {apis && <h1>{apis[name]?.message}</h1>}
          </>
        );
      })}
    </>
  );
}
