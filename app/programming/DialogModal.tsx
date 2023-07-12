import { MouseEvent, useEffect, useRef } from "react";

const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

type Props = {
  title: string;
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const DialogModal = ({ title, isOpened, onClose, children }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    onClose();
  };

  return (
    <dialog
      className="lg:w-3/5 w-full rounded-lg text-white border-[#fff] border-[1px] backdrop:bg-[#0000004c] bg-gradient-to-r from-black via-cyan-700 to-indigo-100"
      ref={ref}
      onCancel={onClose}
      onClick={(e: any) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      <p className="w-full text-center text-2xl italic font-thin">{title}</p>

      {children}

      <div className="flex gap-5">
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
};

export default DialogModal;
