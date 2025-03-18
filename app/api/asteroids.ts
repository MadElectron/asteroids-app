import request from "@/app/utils/request";
import { mapKeys, snakeCase } from "lodash";

export function getAsteroidsList(rawParams: AsteroidsRequestParams) {
  const params = mapKeys(rawParams, (_v, k) => snakeCase(k));

  return request({
    url: "neo/rest/v1/feed",
    method: "get",
    params,
  });
}
