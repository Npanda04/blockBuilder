import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[220px] box-border max-w-full text-center text-45xl font-abeezee mq450:pb-[143px] mq450:box-border ${className}`}
    >
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 h-[77px] w-[970px] relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full z-[2] mq450:text-19xl mq1050:text-32xl">
            Projects we have worked with
          </h1>
        </div>
        <div className="flex flex-row items-start justify-center gap-[30px] lg:flex-wrap">
          <div className="[backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start py-6 px-[45px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[110px] w-[270px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
            <img
              className="h-[62px] w-[180px] relative object-contain z-[3]"
              alt=""
              src="/spheronasset-1@2x.png"
            />
          </div>
          <div className="[backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start py-6 px-[45px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[110px] w-[270px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
            <img
              className="h-[62px] w-[180px] relative object-contain z-[3]"
              loading="lazy"
              alt=""
              src="/spheronasset-2@2x.png"
            />
          </div>
          <div className="[backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start py-6 px-[45px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[110px] w-[270px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
            <img
              className="h-[62px] w-[180px] relative object-contain z-[3]"
              loading="lazy"
              alt=""
              src="/spheronasset-3@2x.png"
            />
          </div>
          <div className="[backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start py-6 px-[45px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[110px] w-[270px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
            <img
              className="h-[62px] w-[180px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/spheronasset-4@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
