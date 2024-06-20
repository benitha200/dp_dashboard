import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import CoursesTable from "@/components/Tables/CoursesTable";
import AddCourseForm from "@/components/DashBoardForms/AddCourseForm";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Training Courses",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <AddCourseForm />
    </DefaultLayout>
  );
};

export default CalendarPage;
