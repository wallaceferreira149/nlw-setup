export interface IBaseTemplate {}

export const BaseTemplate: React.FC<IBaseTemplate> = ({}) => {
  return (
    <div className="bg-gray-400 font-bold">
      <h1 className="text-2xl text-blue-500">Tailwind</h1>
    </div>
  );
};
