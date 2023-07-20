export const responseHandler = (
  message?: string,
  statusCode?: number,
  data?: any,
) => {
  return {
    ...(message && { message }),
    ...(statusCode && { statusCode }),
    ...(data && { data }),
  };
};
