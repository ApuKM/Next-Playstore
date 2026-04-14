import InstalledAppsProvider from "@/context/installContext";

const Providers = ({ children }) => {
  return <InstalledAppsProvider>{children}</InstalledAppsProvider>;
};

export default Providers;