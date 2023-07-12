import { ReactElement } from "react";

export const FlipCard = ({
  type = 1,
  children,
}: {
  type?: number;
  children: ReactElement;
}) => {
  return (
    <div className="break-words">
      <div
        id="card"
        className="flip-card"
        tabIndex={0}
        style={{
          marginTop: "20px",
          // marginRight: "auto",
          // marginLeft: "auto",
        }}
      >
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            style={{
              backgroundImage: `url('/images/Card-out${type}.png')`,
              borderRadius: "10px",
            }}
          ></div>

          <div className="flip-card-back">{children}</div>
        </div>
      </div>
    </div>
  );
};
