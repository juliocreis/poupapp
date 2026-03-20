export function ProgressBar({ value }) {
  return (
    <div className="bg-neutral-darker w-full h-[40px] rounded-lg w-full">
      <div
        className="bg-primary-highlight h-full rounded-lg flex justify-center items-center transition-[0.5s] text-neutral-darker leading-[120%] font-medium"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
}
