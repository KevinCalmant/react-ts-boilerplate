const dev = {
  url: 'http://localhost:8080',
};

const prod = {
  url: 'xx',
};

const envConfig = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default envConfig;
