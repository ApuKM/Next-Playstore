"use client";
import { InstallAppsContext } from "@/context/installContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleButton = ({ app }) => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
  console.log(installedApps, "something");

  const handleInstallNow = () => {
    console.log("Handle install now");
    setInstalledApps([...installedApps, app]);
    toast.success(`${app.title} is successfully installed!`);

    // Logic
  };

  const isInstalled = installedApps.find(
    (installedApp) => installedApp.id === app.id,
  );
  //Find method ->   undefined | {}
  console.log({ isInstalled, app }, "isInstalled");

  return (
    <button
      disabled={isInstalled ? true : false}
      className={`btn ${isInstalled ? "opacity-80" : "bg-purple-500"} text-white`}
      onClick={handleInstallNow}
    >
     {isInstalled ? "App Installed" : "Install Now"}
    </button>
  );
};

export default InstallToggleButton;