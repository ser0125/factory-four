"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Apis } from "@/interfaces/Apis";
import Card from "@/components/Card";
import useFetchApi from "@/hooks/useFetchApi";

const ENDPOINTS = [
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
]; // Here you can add or remove an endpoint

const INTERVAL_TIME = 15000; // Here you can adjust the time interval for fetching data

export default function Dashboard() {
  const apis = useFetchApi(ENDPOINTS, INTERVAL_TIME);

  return (
    <>
      <div className="flex flex-wrap justify-center itesm-center h-[90%]">
        {apis &&
          Object.keys(apis)
            .sort()
            .map((name: string, index: number) => {
              return <Card key={name + index} name={name} data={apis[name]} />;
            })}
      </div>
    </>
  );
}
