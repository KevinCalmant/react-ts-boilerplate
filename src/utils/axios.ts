import { defer, map, Observable } from 'rxjs';
import initialization, {
  axiosRequestConfiguration,
} from '../config/AxiosRequestConfiguration';

const axiosInstance = initialization(axiosRequestConfiguration);

const get = <T>(url: string, queryParams?: object): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, { params: queryParams })).pipe(
    map((result) => result.data)
  );
};

const post = <T>(
  url: string,
  body: object,
  queryParams?: object
): Observable<T> => {
  return defer(() =>
    axiosInstance.post<T>(url, body, { params: queryParams })
  ).pipe(map((result) => result.data));
};

const put = <T>(
  url: string,
  body: object,
  queryParams?: object
): Observable<T> => {
  return defer(() =>
    axiosInstance.put<T>(url, body, { params: queryParams })
  ).pipe(map((result) => result.data));
};

const patch = <T>(
  url: string,
  body: object,
  queryParams?: object
): Observable<T> => {
  return defer(() =>
    axiosInstance.patch<T>(url, body, { params: queryParams })
  ).pipe(map((result) => result.data));
};

// Delete is shadowed for unknown reason...
const deleter = <T>(url: string, id: number | string): Observable<T> => {
  return defer(() => axiosInstance.delete(`${url}/${id}`)).pipe(
    map((result) => result.data)
  );
};

export default { get, post, put, patch, delete: deleter };
