const shared = {
  name: "Codex",
  repo: "https://github.com/codex-iter/website-frontend",
  website: "https://codex-iter.in",
  title: "Codex - We code, we explore",
  description:
    "We are a group of motivated coders from ITER who wish to create an environment for anyone who wishes to begin their coding journey.",
  image: "https://codex-iter.in/banner.png",
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: "website",
  title: shared.title,
  titleTemplate: "%s - Codex",
  description: shared.description,
  stats: {
    members: 160,
    commits: 1.3,
    projects: 30,
    workshops: 10,
  },
  newsletterUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdOp_wsPsjwFvxhSRECAxBsUGeL2s4cjJ1SghNLgNPg7f8bHQ/viewform",
  siteUrl: shared.website,
  contacts: {
    instagram: "https://www.instagram.com/codexiter",
    youtube: "https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA",
    github: "https://github.com/codex-iter",
    facebook: "https://www.facebook.com/codexiter",
    linkedin: "https://www.linkedin.com/company/codex-iter",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: "https://codex-iter.in/banner.png",
        width: 1200,
        height: 630,
        alt: "Codex - We code, we explore",
      },
    ],
  },
};

export default siteConfig;
