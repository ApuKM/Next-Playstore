import TrendingApps from "@/components/homepage/TrendingApps";
import React from "react";

export const metadata = {
  title: "Apps page | PH play store ",
  description: "This is an application management website",
};

const AppsPage = () => {
  return (
    <div>
      <TrendingApps from="apps"/>
    </div>
  );
};

export default AppsPage;