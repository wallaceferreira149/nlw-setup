import { api } from '@/lib/axios';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';
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
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post('habits', {
      title,
      weekDays,
    });

    setTitle('');
    setWeekDays([]);
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];
      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="text"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        autoFocus
        value={title}
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrêrncia?
      </label>

      <div className="flex flex-col gap-3 mt-3">
        {avalibleWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={`${weekDay}-${index}`}
            className="flex items-center gap-3 group focus:outline-none"
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-1 group-focus:ring-violet-400 group-focus:ring-offset-2 group-focus:ring-offset-background">
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
        className="mt-6 rounded-lg p-4 flex items-center gap-3 justify-center font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        <AiOutlineCheck size={20} />
        Confirmar
      </button>
    </form>
  );
};
