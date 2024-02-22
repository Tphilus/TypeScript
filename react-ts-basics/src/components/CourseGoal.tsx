import { PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

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

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2> {title} </h2>
        <p>{children}</p>
        <button>Delete</button>
      </div>
    </article>
  );
}
