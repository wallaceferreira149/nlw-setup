import * as Progress from '@radix-ui/react-progress';

export interface IProgressBar {
  progress: number;
}

export const ProgressBar: React.FC<IProgressBar> = ({
  progress,
}: IProgressBar) => {
  return (
    <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
      />
    </Progress.Root>
  );
};
