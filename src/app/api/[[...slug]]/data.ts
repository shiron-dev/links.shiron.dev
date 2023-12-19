type SNSType = "X(Twitter)" | "GitHub";

interface SNSData {
  url: string;
  overview: string | undefined;
  description: string | undefined;
}

const HOST_NAME = "https://links.shiron.dev";

export const SNS: Record<SNSType, SNSData> = {
  "X(Twitter)": {
    url: "https://twitter.com/shiron_dev",
    overview: undefined,
    description: undefined,
  },
  GitHub: {
    url: "https://github.com/shiron-dev",
    overview: undefined,
    description: undefined,
  },
};

interface ImgData {
  svg: string | undefined;
  png: string | undefined;
}

interface SNSIconData {
  lightLogo: ImgData | undefined;
  darkLogo: ImgData | undefined;
  lightIcon: ImgData | undefined;
  darkIcon: ImgData | undefined;
}

export const SNSIcon: Record<SNSType, SNSIconData> = {
  "X(Twitter)": {
    lightLogo: {
      svg: `${HOST_NAME}/x-logo/logo.svg`,
      png: `${HOST_NAME}/x-logo/logo-white.png`,
    },
    darkLogo: {
      svg: undefined,
      png: `${HOST_NAME}/x-logo/logo-black.png`,
    },
    lightIcon: {
      svg: `${HOST_NAME}/x-logo/logo.svg`,
      png: `${HOST_NAME}/x-logo/logo-white.png`,
    },
    darkIcon: {
      svg: undefined,
      png: `${HOST_NAME}/x-logo/logo-black.png`,
    },
  },
  GitHub: {
    lightLogo: {
      svg: undefined,
      png: `${HOST_NAME}/GitHub-Logos/GitHub_Logo_White.png`,
    },
    darkLogo: {
      svg: undefined,
      png: `${HOST_NAME}/GitHub-Logos/GitHub_Logo.png`,
    },
    lightIcon: {
      svg: `${HOST_NAME}/GitHub-Logos/github-mark-white.svg`,
      png: `${HOST_NAME}/GitHub-Logos/github-mark-white.png`,
    },
    darkIcon: {
      svg: `${HOST_NAME}/GitHub-Logos/github-mark.svg`,
      png: `${HOST_NAME}/GitHub-Logos/github-mark.png`,
    },
  },
};
