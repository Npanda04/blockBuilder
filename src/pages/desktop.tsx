import { FunctionComponent } from "react";
import FrameComponent6 from "../components/frame-component6";
import LearnBuildAndEarnInWeb from "../components/learn-build-and-earn-in-web";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import NetworkContent from "../components/network-content";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-700 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[97px] box-border gap-[70px] leading-[normal] tracking-[normal] mq750:gap-[35px] mq450:gap-[17px]">
      <img
        className="w-full h-[611px] absolute !m-[0] top-[248px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-3.svg"
      />
      <FrameComponent6 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[175px] box-border max-w-full text-center text-45xl text-white font-abeezee mq450:pb-[114px] mq450:box-border">
        <div className="w-[1070px] flex flex-col items-start justify-start gap-[14px] max-w-full">
          <LearnBuildAndEarnInWeb />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-[24px]">
            <p className="m-0 h-[87px] w-[570px] relative tracking-[-0.02em] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi">
              Our mission is to build a community of whiz-kids and curious
              minds, trailblazers, and tutors, all united under one roof to
              build learn and earn in web3
            </p>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[178px] pr-5 pl-[21px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <button className="cursor-pointer py-[15px] px-[35px] bg-gray-800 shadow-[0px_16px_10.9px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(62.3px)] rounded-31xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[0.5px] border-solid border-skyblue hover:bg-darkslategray-300 hover:box-border hover:border-[0.5px] hover:border-solid hover:border-deepskyblue-200">
            <div className="relative text-sm tracking-[-0.02em] font-medium font-abeezee text-white text-left whitespace-nowrap">
              Join the Community Now!
            </div>
          </button>
          <button className="cursor-pointer py-[15px] px-[61px] bg-gray-800 [backdrop-filter:blur(62.3px)] rounded-31xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[0.5px] border-solid border-gray-300 hover:bg-darkslategray-300 hover:box-border hover:border-[0.5px] hover:border-solid hover:border-gray-100">
            <div className="relative text-sm tracking-[-0.02em] font-medium font-abeezee text-white text-left inline-block min-w-[101px]">
              Partner With Us
            </div>
          </button>
        </div>
      </div>
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <div className="!m-[0] absolute top-[2990px] left-[517px] flex flex-row items-start justify-start">
        <NetworkContent />
        <img
          className="h-[188px] w-[188px] relative object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/artificial-intelligence-ai@2x.png"
        />
      </div>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Desktop;
