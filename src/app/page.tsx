import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Chart from "@/components/Charts/page";
import BasicChartPage from "./chart/page";

export const metadata: Metadata = {
  title:
    "Dashboard",
  description: "Dashboard",
};

export default function Home() {
  return (
    <>
        <BasicChartPage/>
    </>
  );
}
