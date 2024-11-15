import { Link } from "@remix-run/react";
import classNames from "classnames";
import * as styles from "./styles.css";

interface Props {
  className?: string
  name: string
  userName: string
  icon: string
  href: string
  width?: number
  height?: number
}

export function SNSCard(props: Props): JSX.Element {
  return (
    <Link to={props.href} className={classNames(styles.snsCard, props.className)}>
      <img
        src={props.icon}
        alt={props.name}
        width={props.width ?? 64}
        height={props.height ?? 64}
      />
      <div>
        <div>
          <div className={styles.snsName}>{props.name}</div>
          <div className={styles.userName}>{props.userName}</div>
        </div>
      </div>
    </Link>
  );
}
