import { generateDatesFromYearBegining } from '@/utils/generate-dates-from-year-begining';
import { HabitDay } from '../HabitDay';

export interface ISummaryTable {}

const weekOfDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const summaryDates = generateDatesFromYearBegining();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable: React.FC<ISummaryTable> = ({}) => {
  return (
    <section className="w-full flex gap-3">
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
        {summaryDates.map((day) => (
          <HabitDay
            completed={4}
            amount={Math.round(Math.random() * 5) * 5}
            key={day.toDateString()}
          />
        ))}
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
