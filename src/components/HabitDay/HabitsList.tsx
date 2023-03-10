import { api } from '@/lib/axios';
import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

interface IHabitsList {
  date: Date;
  onCompletedChange: (completed: number) => void;
}

interface IHabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export function HabitsList({ date, onCompletedChange }: IHabitsList) {
  const [habitsInfo, setHabitsInfo] = useState<IHabitsInfo>();
  useEffect(() => {
    api
      .get('day', {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setHabitsInfo(response.data));
  }, []);

  async function handleToggleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toggle`);

    const isHabitAlreadyCompleted =
      habitsInfo!.completedHabits.includes(habitId);

    let completedHabits: string[] = [];
    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (id) => id !== habitId
      );
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    });

    onCompletedChange(completedHabits.length);
  }

  const isDayInPast = dayjs(date).endOf('day').isBefore(new Date());

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit, i) => (
        <Checkbox.Root
          key={habit.id}
          className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
          disabled={isDayInPast}
          checked={habitsInfo.completedHabits.includes(habit.id)}
          onCheckedChange={() => handleToggleHabit(habit.id)}
        >
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-1 group-focus:ring-violet-400 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900">
            <Checkbox.Indicator>
              <AiOutlineCheck size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400 duration-300">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  );
}
