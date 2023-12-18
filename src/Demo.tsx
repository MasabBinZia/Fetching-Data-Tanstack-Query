import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./Data";

const Demo = () => {
  const { data: names, isLoading } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["names"],
  });

  if (isLoading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      {names?.map((name: any, idx: number) => {
        return (
          <div key={idx} className="Demo">
            {name.userId}
            {name.title}
            {name.body}
          </div>
        );
      })}
    </div>
  );
};

export default Demo;
