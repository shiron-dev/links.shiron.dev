import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

import type { ReactNode } from "react";
import type { ImgData, SNSData, SNSIconData, SNSType } from "server/data";
import { json, useLoaderData } from "@remix-run/react";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { SNSCard } from "./features/SNSCard";
import * as styles from "./styles.css";

async function fetchData(host: string, protocol: string): Promise<
  | {
    sns: Record<SNSType, SNSData>
    icons: Record<SNSType, SNSIconData>
  }
  | undefined
> {
  try {
    const sns = await fetch(`${protocol}://${host}/api/sns`).then(data =>
      data.json(),
    ) as Record<SNSType, SNSData>;
    const icons = await fetch(`${protocol}://${host}/api/icons`).then(data =>
      data.json(),
    ) as Record<SNSType, SNSIconData>;
    return {
      sns,
      icons,
    };
  }
  catch {
    return undefined;
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const host = request.headers.get("host") ?? "";
  const protocol = host.startsWith("localhost") ? "http" : "https";

  return typedjson(await fetchData(host, protocol));
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

export default function Page(): ReactNode {
  const data = useTypedLoaderData<typeof loader>();

  if (data === undefined)
    throw new Error("error");

  return (
    <div>
      <main className={styles.main}>
        <div>
          {Object.keys(data.sns).map((v) => {
            const e = v as SNSType;
            return (
              <SNSCard
                className={styles.card}
                name={v}
                userName={data.sns[e]?.username}
                icon={getIconUrl(data.icons[e], true)}
                href={data.sns[e].url}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
