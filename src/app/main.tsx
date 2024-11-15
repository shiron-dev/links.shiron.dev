import type { ImgData, SNSData, SNSIconData, SNSType } from "./api/[[...slug]]/data";
import { headers } from "next/headers";
import { SNSCard } from "./_components/SNSCard/SNSCard";
import styles from "./page.module.css";

async function fetchData(host: string, protocol: string): Promise<
  | {
    sns: Record<SNSType, SNSData>
    icons: Record<SNSType, SNSIconData>
  }
  | undefined
> {
  try {
    const sns = await fetch(`${protocol}://${host}/api/`).then(data =>
      data.json(),
    );
    const icons = await fetch(`${protocol}://${host}/api/icons`).then(data =>
      data.json(),
    );
    return {
      sns,
      icons,
    };
  }
  catch {
    return undefined;
  }
}

function getIconUrl(data: SNSIconData, isDark = false): string {
  const getSVGorPNG = (data: ImgData | undefined): string | undefined => {
    return data?.svg ?? data?.png;
  };

  if (isDark) {
    return (
      getSVGorPNG(data.darkIcon) ?? getSVGorPNG(data.darkLogo) ?? "/error.svg"
    );
  }
  else {
    return (
      getSVGorPNG(data.lightIcon) ?? getSVGorPNG(data.lightLogo) ?? "/error.svg"
    );
  }
}

async function Main() {
  const host = headers().get("host") ?? "";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const data = await fetchData(host, protocol);
  if (data === undefined)
    return <div>error</div>;
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
}

export default Main;
