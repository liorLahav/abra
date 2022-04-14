import Classes from "./loading.css";

const Loading = () => {
  return (
    <img
      className={Classes.loading}
      loading="lazy"
      src="https://tenor.com/view/waiting-ugh-loading-please-wait-no-connection-gif-14455527"
      alt="loading..."
    ></img>
  );
};

export default Loading;
