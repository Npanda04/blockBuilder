import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  programElements?: string;
  workshopsBuilder?: string;
  bootcampsBuildCollaborate?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  programElements,
  workshopsBuilder,
  bootcampsBuildCollaborate,
  propHeight,
  propDisplay,
}) => {
  const workshopsBuilderStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={`w-[370px] flex flex-col items-start justify-end py-6 pr-5 pl-6 box-border relative gap-[2px] min-h-[520px] max-w-full text-left text-13xl text-white font-abeezee ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={programElements}
      />
      <h1
        className="m-0 self-stretch h-[38px] relative text-inherit tracking-[0.01em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] z-[1] mq450:text-lgi mq1050:text-7xl"
        style={workshopsBuilderStyle}
      >
        {workshopsBuilder}
      </h1>
      <p className="m-0 self-stretch relative text-base tracking-[-0.02em] [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] z-[1]">
        {bootcampsBuildCollaborate}
      </p>
    </div>
  );
};

export default GroupComponent;
