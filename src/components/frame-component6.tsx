import { FunctionComponent } from "react";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch bg-gray-700 flex flex-row items-end justify-center py-[27px] pr-5 pl-7 box-border gap-[448px] top-[0] z-[99] sticky max-w-full text-left text-base text-white font-abeezee lg:gap-[224px] mq750:gap-[112px] mq450:gap-[56px] ${className}`}
    >
      <div className="h-20 w-[1440px] relative bg-gray-700 hidden max-w-full" />
      <img
        className="h-[26px] w-[262px] relative z-[1]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-[24px] mq750:hidden">
          <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] inline-block min-w-[112px] whitespace-nowrap z-[1]">
              Our Initiatives
            </a>
          </div>
          <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] whitespace-nowrap z-[1]">
            Why Block Buidlers
          </a>
          <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] inline-block min-w-[62px] z-[1]">
              Projects
            </a>
          </div>
          <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] inline-block min-w-[67px] whitespace-nowrap z-[1]">
            About Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent6;
