import type { RequestHandler } from '@qwik.dev/router';

export const onGet: RequestHandler = ({ redirect, url }) => {
  throw redirect(301, `/docs/rules/${url.search}`);
};
