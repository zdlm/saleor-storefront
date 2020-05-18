import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Loader } from "@components/atoms";
import { useAuth, useOrderDetails } from "@saleor/sdk";

import Page from "./Page";

const View: React.FC<RouteComponentProps<{ token?: string }>> = ({
  match: {
    params: { token },
  },
}) => {
  const { data: order, loading } = useOrderDetails({ token });
  const { user } = useAuth();
  const guest = !user;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="order-details container">
      <Page guest={guest} order={order} />
    </div>
  );
};

export default View;
