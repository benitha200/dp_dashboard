import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Chart from "@/components/Charts/page";
import BasicChartPage from "./chart/page";
// import '../styles/globals.css';
import "../css/style.css"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

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
