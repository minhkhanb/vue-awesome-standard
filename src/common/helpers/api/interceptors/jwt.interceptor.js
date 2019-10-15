export const JwtIntercept = (request) => {
  request.use((config) => {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: 'Bearer PLACE_TOKEN_HERE',
      },
    };
    return newConfig;
  });
};
