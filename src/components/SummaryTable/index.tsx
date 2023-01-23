import { api } from '@/lib/axios';
import { generateDatesFromYearBegining } from '@/utils/generate-dates-from-year-begining';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { HabitDay } from '../HabitDay';

export interface ISummaryTable {}

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
};

const weekOfDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const summaryDates = generateDatesFromYearBegining();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable: React.FC<ISummaryTable> = ({}) => {
  const [summary, setSummary] = useState<Summary[]>([]);
  useEffect(() => {
    api.get('/summary').then((response) => {
      setSummary(response.data);
    });
  }, []);
  return (
    <section className="w-full flex gap-3 bg-background">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekOfDays.map((dayWeek, index) => (
          <div
            key={`${index}-${dayWeek}`}
            className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center "
          >
            {dayWeek}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, 'day');
            });
            return (
              <HabitDay
                date={date}
                defaultCompleted={dayInSummary?.completed}
                amount={dayInSummary?.amount}
                key={date.toDateString()}
              />
            );
          })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            ></div>
          ))}
      </div>
    </section>
  );
};
