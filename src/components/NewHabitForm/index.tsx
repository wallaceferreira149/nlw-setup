import * as Checkbox from '@radix-ui/react-checkbox';
import { AiOutlineCheck } from 'react-icons/ai';

export interface INewHabitForm {}

const avalibleWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

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

      <div className="flex flex-col gap-3 mt-3">
        {avalibleWeekDays.map((weekDay, i) => (
          <Checkbox.Root
            key={`${weekDay}-${i}`}
            className="flex items-center gap-3 group"
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <AiOutlineCheck size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>
            <span className="text-white leading-tight">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>

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
