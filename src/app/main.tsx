import { SNSCard } from "./_components/SNSCard/SNSCard";
import { ImgData, SNSData, SNSIconData, SNSType } from "./api/[[...slug]]/data";
import { headers } from "next/headers";
import styles from "./page.module.css";

const fetchData = async (
  host: string,
  protocol: string,
): Promise<
  | {
      sns: Record<SNSType, SNSData>;
      icons: Record<SNSType, SNSIconData>;
    }
  | undefined
> => {
  try {
    const sns = await fetch(`${protocol}://${host}/api/`).then((data) =>
      data.json(),
    );
    const icons = await fetch(`${protocol}://${host}/api/icons`).then((data) =>
      data.json(),
    );
    return {
      sns: sns,
      icons: icons,
    };
  } catch (e) {
    return undefined;
  }
};

const getIconUrl = (data: SNSIconData, isDark = false): string => {
  const getSVGorPNG = (data: ImgData | undefined): string | undefined => {
    return data?.svg ?? data?.png;
  };

  if (isDark)
    return (
      getSVGorPNG(data.darkIcon) ?? getSVGorPNG(data.darkLogo) ?? "/error.svg"
    );
  else
    return (
      getSVGorPNG(data.lightIcon) ?? getSVGorPNG(data.lightLogo) ?? "/error.svg"
    );
};

const Main = async () => {
  const host = headers().get("host") ?? "";
  const protocol = /^localhost/.test(host) ? "http" : "https";
  const data = await fetchData(host, protocol);
  if (data === undefined) return <div>error</div>;
  return (
    <div className={styles.card}>
      {Object.keys(data.sns).map((v) => {
        const e = v as SNSType;
        return (
          <SNSCard
            name={v}
            userName={data.sns[e]?.username}
            icon={getIconUrl(data.icons[e], true)}
            href={data.sns[e].url}
          />
        );
      })}
    </div>
  );
};

export default Main;
