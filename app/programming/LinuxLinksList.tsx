import { Dispatch, SetStateAction } from "react";
export const LinuxLinksList = ({
  data,
  openDialogBox,
  setSelection,
}: {
  data: linuxItem[];
  openDialogBox: Dispatch<SetStateAction<boolean>>;
  setSelection: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-col">
      <p>total {data.length}</p>

      <div className="flex flex-col">
        {data.map((item, index) => {
          return (
            <a
              key={item.label + index}
              className="cursor-pointer"
              onClick={() => {
                setSelection(index);
                openDialogBox(true);
              }}
            >
              <span>
                {`${item.permission}  1 user  group    ${item.size} ${item.month} ${item.time} `}
                <span className="text-[#A7CEF3]">{item.label}.txt</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
