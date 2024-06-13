import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Certificate Applications",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <TableThree />
    </DefaultLayout>
  );
};

export default CalendarPage;
