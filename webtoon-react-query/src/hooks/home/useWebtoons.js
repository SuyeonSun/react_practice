import { useQuery } from "@tanstack/react-query";
import { getWebtoons } from "../../remote/webtoons";

function useWebtoons({ page }) {
  return useQuery({
    queryKey: useWebtoons.getKey({ page }),
    queryFn: () => getWebtoons(page),
  });
}

useWebtoons.getKey = ({ page }) => ["home", "/webtoons", page];

export default useWebtoons;
