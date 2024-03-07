import { Api } from "@/interfaces/Apis";

const CardContainer = ({ name, data }: { name: string; data: Api }) => {;
  const { message, success, hostname, time } = data;
  return (
    <div className="flex">
      <h1>{name}</h1>
      <h1>{message}</h1>
      <h1>{success}</h1>
      <h1>{hostname}</h1>
      <h1>{time}</h1>
    </div>
  );
};

export default CardContainer;
