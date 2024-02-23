import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        const { id, title, description } = goal;
        return (
          <li key={id}>
            <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
              {description}
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
