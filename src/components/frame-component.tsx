import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <footer className="w-[1170px] rounded-13xl bg-gray-500 flex flex-col items-start justify-start pt-12 px-12 pb-6 box-border gap-[123px] max-w-full text-justify text-sm text-darkgray font-abeezee lg:gap-[61px] lg:pl-6 lg:pr-6 lg:box-border mq750:gap-[31px] mq450:gap-[15px] mq450:pt-[31px] mq450:pb-5 mq450:box-border">
        <div className="w-[1170px] h-[354px] relative rounded-13xl bg-gray-500 hidden max-w-full" />
        <div className="w-[72px] h-[42px] relative overflow-hidden shrink-0 hidden" />
        <div className="w-[1010px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[262px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
            <img
              className="self-stretch h-[26px] relative max-w-full overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/vector.svg"
            />
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                alt=""
                src="/social-icons-1.svg"
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                alt=""
                src="/social-icons-2.svg"
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                alt=""
                src="/social-icons-3.svg"
              />
            </div>
          </div>
          <div className="w-[558px] flex flex-row items-start justify-start gap-[52px] min-w-[558px] max-w-full mq750:flex-wrap mq750:gap-[26px] mq750:min-w-full mq1050:flex-1">
            <div className="w-[170px] flex flex-col items-start justify-start gap-[20px] min-w-[170px] mq750:flex-1">
              <a className="[text-decoration:none] self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                Site Map
              </a>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.02em] z-[1]">
                  Our Initiatives
                </div>
                <div className="self-stretch relative tracking-[-0.02em] z-[1]">
                  Why Block Buidlers
                </div>
                <a className="[text-decoration:none] self-stretch relative tracking-[-0.02em] text-[inherit] z-[1]">
                  Projects
                </a>
                <a className="[text-decoration:none] self-stretch relative tracking-[-0.02em] text-[inherit] z-[1]">
                  About Us
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[218px] max-w-full">
              <div className="w-[194px] flex flex-row items-start justify-start py-0 px-3 box-border">
                <div className="flex-1 relative text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                  Subscribe
                </div>
              </div>
              <div className="self-stretch rounded-8xl bg-gray-600 overflow-hidden flex flex-row items-start justify-between py-1 pr-[7px] pl-[23px] gap-[20px] z-[1] border-[1px] border-solid border-gray-200 mq450:flex-wrap">
                <div className="w-[146px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
                  <div className="self-stretch relative tracking-[-0.02em] whitespace-nowrap">
                    Enter your email address
                  </div>
                </div>
                <button className="cursor-pointer py-2.5 px-[23px] bg-gray-400 rounded-19xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-skyblue hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-deepskyblue-200">
                  <div className="relative text-xs tracking-[-0.02em] font-abeezee text-white text-justify inline-block min-w-[55px]">
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15.5px] text-xs text-white">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[22px]">
              <div className="relative tracking-[-0.02em] inline-block min-w-[74px] z-[1]">
                Privacy Policy
              </div>
              <div className="relative tracking-[-0.02em] inline-block min-w-[95px] whitespace-nowrap z-[1]">{`Terms & Conditions`}</div>
            </div>
            <div className="h-3.5 w-[260px] relative tracking-[-0.02em] text-right inline-block z-[1]">
              Copyright © 2024 Block Buidlers All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent;
