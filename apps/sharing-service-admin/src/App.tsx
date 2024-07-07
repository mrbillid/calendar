import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SharingInformationList } from "./sharingInformation/SharingInformationList";
import { SharingInformationCreate } from "./sharingInformation/SharingInformationCreate";
import { SharingInformationEdit } from "./sharingInformation/SharingInformationEdit";
import { SharingInformationShow } from "./sharingInformation/SharingInformationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sharing Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SharingInformation"
          list={SharingInformationList}
          edit={SharingInformationEdit}
          create={SharingInformationCreate}
          show={SharingInformationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
