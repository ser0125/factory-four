import { Api } from "@/interfaces/Apis";

const Card = ({ name, data }: { name: string; data: Api }) => {
  const { message, success, hostname, time } = data;
  return (
    <div className="flex p-[16px] basis-1/6 max-w-1/6 h-[30%]">
      <div className="flex flex-col w-full shadow-card p-[20px] items-center gap-[5px]">
        <h1 className="text-2xl uppercase">{name}</h1>
        <div
          className={`flex w-full justify-center text-white ${
            success ? "bg-success" : "bg-error"
          }`}
        >
          <p>{message}</p>
        </div>
        <h1>{success}</h1>
        <h1>{hostname}</h1>
        <h1>{time}</h1>
        {!success ? (
          <div className="flex flex-col items-center text-error">
            <p className="text-xl">OUTAGE</p>
            {data.error && (
              <>
                <p>{data.error?.status}</p>
                <p>{data.error?.message}</p>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
