import { Link } from "@remix-run/react";
import * as styles from "./styles.css";

interface Props {
  name: string
  userName: string
  icon: string
  href: string
  width?: number
  height?: number
}

export function SNSCard(props: Props): JSX.Element {
  return (
    <Link to={props.href} className={styles.snsCard}>
      <img
        src={props.icon}
        alt={props.name}
        width={props.width ?? 64}
        height={props.height ?? 64}
      />
      <div>
        <div className="title">
          <div className="sns-name">{props.name}</div>
          <div className="user-name">{props.userName}</div>
        </div>
      </div>
    </Link>
  );
}
