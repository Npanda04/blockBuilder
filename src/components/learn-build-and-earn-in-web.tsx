import { FunctionComponent, memo } from "react";

export type LearnBuildAndEarnInWebType = {
  className?: string;
};

const LearnBuildAndEarnInWeb: FunctionComponent<LearnBuildAndEarnInWebType> =
  memo(({ className = "" }) => {
    return (
      <h1
        className={`m-0 self-stretch w-full relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit text-transparent bg-clip-text bg-gradient-to-b from-[#04d9ff] to-[#4297ff] [background-clip:text] [text-fill-color:transparent] inline-block whitespace-nowrap overflow-hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${className}`}
      >
        Learn, Build and Earn in Web3
      </h1>
    );
  });

export default LearnBuildAndEarnInWeb;
