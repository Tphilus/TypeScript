import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        const { id, title, description } = goal;
        return (
          <li key={id}>
            <CourseGoal title={title}>{description}</CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
