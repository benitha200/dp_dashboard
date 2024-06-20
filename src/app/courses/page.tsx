import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import CoursesTable from "@/components/Tables/CoursesTable";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Training Courses",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <CoursesTable />
    </DefaultLayout>
  );
};

export default CalendarPage;
