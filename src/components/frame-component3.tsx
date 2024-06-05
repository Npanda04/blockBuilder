import { FunctionComponent } from "react";
import BlockBuidlersDescription from "./block-buidlers-description";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1416px] flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-right text-base text-white font-abeezee mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="w-[994px] flex flex-col items-start justify-start gap-[115px] max-w-full mq750:gap-[29px] mq1050:gap-[57px]">
        <p className="m-0 w-[470px] relative tracking-[-0.02em] inline-block [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] max-w-full">
          Connect with fellow innovators, pick their brilliant brains, and
          collaborate on groundbreaking projects. Gain access to exclusive
          events to enhance your skills. Be part of a vibrant community that
          supports and celebrates your development journey.
        </p>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <BlockBuidlersDescription
            bUIDL="learn"
            getAccessToResourcesTutor="Find inspiration, share your ideas, and learn from the best in the web3 space. Collaborate on innovative projects that push the boundaries of web3. Build your network and learn alongside passionate developers who are shaping the future."
            propWidth="63px"
            propMargin="0"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
