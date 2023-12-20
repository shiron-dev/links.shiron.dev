import Link from "next/link";
import Image from "next/image";
import "./snscard.css";

interface Props {
  name: string;
  userName: string;
  icon: string;
  href: string;
  width?: number;
  height?: number;
}

export const SNSCard = (props: Props): JSX.Element => {
  return (
    <Link href={props.href} className="sns-card">
      <Image
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
};
