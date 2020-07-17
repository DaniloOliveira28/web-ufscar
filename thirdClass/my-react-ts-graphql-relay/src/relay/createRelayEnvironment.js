import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  // batchMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
  progressMiddleware
} from "react-relay-network-modern/lib";

const __DEV__ = process.env.NODE_ENV === "development";
// const MAX_RETRY_TIMES = 2;

/**
 * Base on react-relay-network-modern
 * see https://github.com/relay-tools/react-relay-network-modern
 */
const network = new RelayNetworkLayer(
  [
    cacheMiddleware({
      size: 100, // max 100 requests
      ttl: 900000 // 15 minutes
    }),
    urlMiddleware({
      url: req => `https://api.github.com/graphql`
    }),
    // batchMiddleware({
    //   batchUrl: requestMap => Promise.resolve('/graphql/batch'),
    //   batchTimeout: 10,
    // }),
    __DEV__ ? loggerMiddleware() : null,
    __DEV__ ? errorMiddleware() : null,
    __DEV__ ? perfMiddleware() : null,
    retryMiddleware({
      allowMutations: false,
      allowFormData: true,
      fetchTimeout: 5 * 1000, // default is 15 * 1000
      retryDelays: attempt => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
      // beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req }) => {
      //   if (attempt > MAX_RETRY_TIMES) {
      //     abort();
      //   }
      // },
      statusCodes: (statusCode, req, res) =>
        statusCode < 200 || statusCode === 408
    }),
    authMiddleware({
      token: () => process.env.REACT_APP_GITHUB_API_TOKEN
      // tokenRefreshPromise: () => Promise.reject()
    }),
    progressMiddleware({
      onProgress: (current, total) => {
        console.log("Downloaded: " + current + " B, total: " + total + " B");
      }
    })

    // example of the custom inline middleware
    // next => async req => {
    //   const res = await next(req).catch(error => {
    //     if (error.res.status === 500) {
    //       reduxStore.dispatch(replace('/500'));
    //     }
    //     throw error
    //   });
    //   return res;
    // },
  ]
  // {
  //   subscribeFn: () => {},
  // }
); // as second arg you may pass advanced options for RRNL

const source = new RecordSource();
const store = new Store(source);
export default new Environment({ network, store });
