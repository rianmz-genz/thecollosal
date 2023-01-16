import React, {FC} from "react";
interface AlertProps{
    isAlert: boolean
    badge: string
    description: string
}

const Alert: FC<AlertProps> = ({isAlert, badge, description}) => {
  return (
    <div
      className={`bg-transparent text-center w-full ${
        isAlert ? "block" : "hidden"
      } `}
    >
      <div
        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          {badge}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Alert;
