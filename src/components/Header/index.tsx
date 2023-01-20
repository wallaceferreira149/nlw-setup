import logoImage from '@/assets/logo.svg';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';

export interface IHeader {}

export const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <Image src={logoImage} alt="Habits logotipo NLW" />
      <button
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 duration-300"
        type="button"
      >
        <AiOutlinePlus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </header>
  );
};
