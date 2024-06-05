import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BlockBuidlersDescriptionType = {
  className?: string;
  bUIDL?: string;
  getAccessToResourcesTutor?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
};

const BlockBuidlersDescription: FunctionComponent<
  BlockBuidlersDescriptionType
> = ({
  className = "",
  bUIDL,
  getAccessToResourcesTutor,
  propWidth,
  propMargin,
}) => {
  const bUIDLStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      margin: propMargin,
    };
  }, [propWidth, propMargin]);

  return (
    <div
      className={`w-[470px] flex flex-col items-start justify-start gap-[20px] max-w-full text-center text-13xl text-white font-abeezee ${className}`}
    >
      <div className="w-[170px] [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] flex flex-row items-start justify-start p-6 box-border z-[3]">
        <div className="h-[86px] w-[170px] relative [backdrop-filter:blur(62px)] rounded-2xl [background:linear-gradient(180deg,_rgba(14,_29,_48,_0.5),_rgba(6,_27,_38,_0.5))] hidden" />
        <b
          className="w-14 relative tracking-[0.02em] uppercase font-bold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[4] mq450:text-lgi mq1050:text-7xl"
          style={bUIDLStyle}
        >
          {bUIDL}
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6 box-border max-w-full text-left text-base">
        <p className="m-0 flex-1 relative tracking-[-0.02em] inline-block [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] max-w-full">
          {getAccessToResourcesTutor}
        </p>
      </div>
    </div>
  );
};

export default BlockBuidlersDescription;
