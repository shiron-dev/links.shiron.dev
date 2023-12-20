export type SNSType = "X(Twitter)" | "GitHub";

export interface SNSData {
  url: string;
  username: string;
  overview: string | undefined;
  description: string | undefined;
}

export const SNS: Record<SNSType, SNSData> = {
  "X(Twitter)": {
    url: "https://twitter.com/shiron_dev",
    username: "@shiron_dev",
    overview: undefined,
    description: undefined,
  },
  GitHub: {
    url: "https://github.com/shiron-dev",
    username: "shiron-dev",
    overview: undefined,
    description: undefined,
  },
};

export interface ImgData {
  svg: string | undefined;
  png: string | undefined;
}

export interface SNSIconData {
  lightLogo: ImgData | undefined;
  darkLogo: ImgData | undefined;
  lightIcon: ImgData | undefined;
  darkIcon: ImgData | undefined;
}

export const SNSIcon = (
  host: string | undefined,
): Record<SNSType, SNSIconData> => {
  return {
    "X(Twitter)": {
      lightLogo: {
        svg: `${host}/x-logo/logo.svg`,
        png: `${host}/x-logo/logo-white.png`,
      },
      darkLogo: {
        svg: undefined,
        png: `${host}/x-logo/logo-black.png`,
      },
      lightIcon: {
        svg: `${host}/x-logo/logo.svg`,
        png: `${host}/x-logo/logo-white.png`,
      },
      darkIcon: {
        svg: undefined,
        png: `${host}/x-logo/logo-black.png`,
      },
    },
    GitHub: {
      lightLogo: {
        svg: undefined,
        png: `${host}/GitHub-Logos/GitHub_Logo_White.png`,
      },
      darkLogo: {
        svg: undefined,
        png: `${host}/GitHub-Logos/GitHub_Logo.png`,
      },
      lightIcon: {
        svg: `${host}/GitHub-Logos/github-mark-white.svg`,
        png: `${host}/GitHub-Logos/github-mark-white.png`,
      },
      darkIcon: {
        svg: `${host}/GitHub-Logos/github-mark.svg`,
        png: `${host}/GitHub-Logos/github-mark.png`,
      },
    },
  };
};
