import { PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2> {title} </h2>
//         <p>{children}</p>
//         <button>Delete</button>
//       </div>
//     </article>
//   );
// };

// export default CourseGoal;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2> {title} </h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
