export interface IHabitDay {}

export const HabitDay: React.FC<IHabitDay> = ({ ...props }) => {
  return (
    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
  );
};
