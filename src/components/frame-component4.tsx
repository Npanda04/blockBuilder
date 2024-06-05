import { FunctionComponent } from "react";
import BlockBuidlersDescription from "./block-buidlers-description";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[138px] box-border max-w-full text-center text-45xl text-white font-abeezee mq450:pb-[90px] mq450:box-border ${className}`}
    >
      <div className="w-[970px] flex flex-col items-end justify-start relative gap-[48px] max-w-full mq750:gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-19xl mq1050:text-32xl">
          WHY BLOCK BUIDLERS
        </h1>
        <BlockBuidlersDescription
          bUIDL="BUIDL"
          getAccessToResourcesTutor="Get access to resources, tutorials, and tools specifically designed for blockchain development. Whether you are a beginner or an experienced developer, our resources will help you experiment and push the boundaries like a ninja."
        />
        <img
          className="w-[188px] h-[188px] absolute !m-[0] bottom-[-6px] left-[282px] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/application-programming-interface-api-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
