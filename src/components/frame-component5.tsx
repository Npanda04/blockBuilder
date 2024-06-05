import { FunctionComponent } from "react";
import GroupComponent from "./group-component";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-center text-45xl text-white font-abeezee lg:pb-[52px] lg:box-border mq750:pb-[34px] mq750:box-border ${className}`}
    >
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[970px] relative text-inherit tracking-[0.02em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full z-[2] mq450:text-19xl mq1050:text-32xl">
            our initiatives
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px_28px] min-h-[1070px] max-w-full text-left text-13xl">
          <GroupComponent
            programElements="/rectangle-10@2x.png"
            workshopsBuilder={`Workshops & Builder `}
            bootcampsBuildCollaborate="Bootcamps Build, collaborate, and get expert guidance"
          />
          <GroupComponent
            programElements="/rectangle-11@2x.png"
            workshopsBuilder="Developer Engagement "
            bootcampsBuildCollaborate="Programs
Access to learning resources, bounties and mentorship"
            propHeight="38px"
            propDisplay="inline-block"
          />
          <div className="w-[370px] flex flex-col items-start justify-end py-6 pr-5 pl-6 box-border relative gap-[2px] min-h-[520px] max-w-full z-[2]">
            <div className="w-[736px] h-[749.1px] absolute !m-[0] top-[-178.1px] left-[-366px]">
              <img
                className="absolute top-[0px] left-[20.6px] w-[715.4px] h-[673.2px] object-contain"
                alt=""
                src="/sparkles@2x.png"
              />
              <img
                className="absolute top-[0px] left-[20.6px] w-[715.4px] h-[673.2px] object-contain z-[1]"
                alt=""
                src="/sparkles@2x.png"
              />
              <div className="absolute top-[447.1px] left-[0px] [filter:blur(450.8px)] rounded-[50%] bg-deepskyblue-100 box-border w-[302px] h-[302px] z-[2] border-[0px] border-solid border-darkslategray-200" />
            </div>
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] z-[1] mq450:text-lgi mq1050:text-7xl">
              Hackathons
            </h1>
            <p className="m-0 self-stretch relative text-base tracking-[-0.02em] [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] z-[1]">
              Create, Innovate, Compete and earn with Expert Mentorship
            </p>
          </div>
          <GroupComponent
            programElements="/rectangle-13@2x.png"
            workshopsBuilder="Buidlers Guild"
            bootcampsBuildCollaborate="Connect, Collaborate, Code, and Grow with Community Support."
            propHeight="unset"
            propDisplay="unset"
          />
          <div className="w-[370px] flex flex-col items-start justify-end py-6 pr-5 pl-6 box-border relative gap-[2px] min-h-[520px] max-w-full z-[3]">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-14@2x.png"
            />
            <h1 className="m-0 self-stretch h-[38px] relative text-inherit tracking-[0.01em] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#04d9ff,_#4297ff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] z-[1] mq450:text-lgi mq1050:text-7xl">
              University Collaborations
            </h1>
            <p className="m-0 self-stretch relative text-base tracking-[-0.02em] [text-shadow:1px_0_0_#2f2f2f,_0_1px_0_#2f2f2f,_-1px_0_0_#2f2f2f,_0_-1px_0_#2f2f2f] z-[1]">
              <span className="block">{`Start a web3 community and create an `}</span>
              <span className="block">impact</span>
            </p>
          </div>
          <GroupComponent
            programElements="/rectangle-15@2x.png"
            workshopsBuilder="Meetups"
            bootcampsBuildCollaborate="Network, learn and discover new opportunities"
            propHeight="unset"
            propDisplay="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
