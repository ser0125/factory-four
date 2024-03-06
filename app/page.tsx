"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [apis, setApis] = useState({});

  const fetchApi = async () => {
    const url = "https://api.factoryfour.com/accounts/health/status";
    try {
      const { data } = await axios.get(url);
      setApis(data);
    } catch (e) {
      console.log(e);
      setApis({ success: false, message: e });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchApi();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div>Dashboard</div>;
}
