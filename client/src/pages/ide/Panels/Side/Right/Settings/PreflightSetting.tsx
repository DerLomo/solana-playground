import { ChangeEvent } from "react";
import { useAtom } from "jotai";

import CheckBox from "../../../../../../components/CheckBox";
import { connectionConfigAtom } from "../../../../../../state";
import { PgConnection } from "../../../../../../utils/pg";

const PreflightSetting = () => {
  const [conn, setConn] = useAtom(connectionConfigAtom);

  const changePreflight = (e: ChangeEvent<HTMLInputElement>) => {
    const isPreflightEnabled = e.target.checked;
    setConn((c) => ({ ...c, preflightChecks: isPreflightEnabled }));
    PgConnection.update({ preflightChecks: isPreflightEnabled });
  };

  return (
    <CheckBox
      onChange={changePreflight}
      checkedOnMount={conn.preflightChecks}
    />
  );
};

export default PreflightSetting;