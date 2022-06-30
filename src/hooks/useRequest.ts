import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "react-query";

export const useRequest = (
  key: QueryKey,
  func: QueryFunction,
  opt?: UseQueryOptions
) => useQuery(key, func, opt);
