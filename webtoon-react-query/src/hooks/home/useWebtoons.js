import { useQuery } from "@tanstack/react-query";
import { getWebtoons } from "../../remote/webtoons";

function useWebtoons({ page }) {
  return useQuery({
    queryKey: useWebtoons.getKey({ page }),
    queryFn: () => getWebtoons(page),
    // refetchInterval: 10000, // 10초마다 자동 갱신
  });
}

useWebtoons.getKey = ({ page }) => ["home", "/webtoons", page];

export default useWebtoons;
