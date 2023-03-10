import logoImage from '@/assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { NewHabitForm } from '../NewHabitForm';
export interface IHeader {}

export const Header: React.FC<IHeader> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(true);
  }
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between bg-background">
      <Image src={logoImage} alt="Habits logotipo NLW" />

      <Dialog.Root>
        <Dialog.Trigger
          onClick={handleClick}
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-background"
          type="button"
        >
          <AiOutlinePlus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 rounded focus:outline-none focus:ring-1 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <AiOutlineClose size={24} />
            </Dialog.Close>
            <Dialog.Title className="text-3xl font-extrabold leading-tight">
              Criar hábito
            </Dialog.Title>
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
};
