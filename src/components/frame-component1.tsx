import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-center text-45xl font-abeezee mq450:pb-[34px] mq450:box-border mq1050:pb-[52px] mq1050:box-border ${className}`}
    >
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[49px] max-w-full mq750:gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 w-[970px] relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full z-[3] mq450:text-19xl mq1050:text-32xl">
              PAST EVENTS
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="!m-[0] absolute top-[-593px] left-[170px] flex flex-row items-start justify-center py-[207px] pr-[18px] pl-[130px] box-border gap-[30px] min-h-[719px] mq750:flex-wrap">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/sparkles-2@2x.png"
              />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                alt=""
                src="/sparkles-2@2x.png"
              />
              <div className="h-[345px] w-[345px] absolute !m-[0] right-[114.8px] bottom-[-25.2px] [filter:blur(1000px)] rounded-[50%] bg-deepskyblue-100 box-border z-[2] border-[0px] border-solid border-darkslategray-200" />
              <div className="[backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start py-6 px-[45px] z-[2]">
                <div className="h-[110px] w-[270px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
                <img
                  className="h-[62px] w-[180px] relative object-contain z-[3]"
                  loading="lazy"
                  alt=""
                  src="/spheronasset-5@2x.png"
                />
              </div>
              <div className="[backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start py-6 px-[45px] z-[2]">
                <div className="h-[110px] w-[270px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
                <img
                  className="h-[62px] w-[180px] relative object-contain z-[3]"
                  loading="lazy"
                  alt=""
                  src="/spheronasset-6@2x.png"
                />
              </div>
            </div>
            <img
              className="h-[610px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover z-[3]"
              alt=""
              src="/rectangle-23@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="rounded-xl bg-gray-400 overflow-x-auto flex flex-row items-start justify-start p-1.5 gap-[6px]">
            <div className="h-3 w-3 relative rounded-[50%] bg-gainsboro shrink-0" />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-gray-300" />
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-gray-300" />
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
