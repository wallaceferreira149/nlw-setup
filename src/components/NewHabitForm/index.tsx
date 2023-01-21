import { AiOutlineCheck } from 'react-icons/ai';

export interface INewHabitForm {}

export const NewHabitForm: React.FC<INewHabitForm> = ({}) => {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="text"
        placeholder="ex:Exercícios, dormir bem, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrêrncia?
      </label>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center gap-3 justify-center font-semibold bg-green-600 hover:bg-green-500"
      >
        <AiOutlineCheck size={20} />
        Confirmar
      </button>
    </form>
  );
};
