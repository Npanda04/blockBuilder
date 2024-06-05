import { FunctionComponent } from "react";

export type NetworkContentType = {
  className?: string;
};

const NetworkContent: FunctionComponent<NetworkContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[718.8px] w-[718.8px] absolute !m-[0] top-[-546px] right-[-309.8px] text-right text-13xl font-abeezee ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
        alt=""
        src="/sparkles-2@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[2]"
        alt=""
        src="/sparkles-2@2x.png"
      />
      <div className="absolute top-[243px] left-[239px] [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] w-[170px] flex flex-row items-start justify-end p-6 box-border z-[4]">
        <div className="h-[86px] w-[170px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
        <h1 className="m-0 w-[102px] relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[5] mq450:text-lgi mq1050:text-7xl">
          network
        </h1>
      </div>
      <div className="absolute top-[208px] left-[273px] w-[356px] h-[302px]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] [filter:blur(700px)] rounded-[50%] bg-deepskyblue-100 box-border w-[302px] z-[3] border-[0px] border-solid border-darkslategray-200" />
        <img
          className="absolute top-[35px] left-[168px] w-[188px] h-[188px] object-contain z-[4]"
          loading="lazy"
          alt=""
          src="/big-data@2x.png"
        />
      </div>
    </div>
  );
};

export default NetworkContent;
