import { IconSavings } from "../Icons";
import { ProgressBar } from "../ProgressBar";

export function SavingStatus({ value }) {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <p className="text-secondary-income flex gap-2 justify-center text-[20px] leading=[125%]">
          <IconSavings />
        Economizar
        </p>
      <ProgressBar value={value}></ProgressBar>
      </div>
    </>
  );
}
