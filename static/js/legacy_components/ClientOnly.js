import useClient from "../hooks/useClient";

const ClientOnly = ({ children, fallback = null }) => {
  const isClient = useClient();

  return isClient ? children : fallback;
};

export default ClientOnly;
