import { useContext } from "react";
import notiContext from "../NotiContext";

const Notification = () => {
  const [noti, dispatch] = useContext(notiContext);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  return <div style={style}>{noti}</div>;
};

export default Notification;
