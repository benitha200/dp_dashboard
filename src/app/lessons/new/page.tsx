import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import CoursesTable from "@/components/Tables/CoursesTable";
import LessonsTable from "@/components/Tables/LessonsTable";
import AddLessonForm from "@/components/DashBoardForms/AddLessonForm";

export const metadata: Metadata = {
  title: "Lessons",
  description:
    "Course Lessons",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <AddLessonForm />
    </DefaultLayout>
  );
};

export default CalendarPage;
