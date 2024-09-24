const shared = {
    name: "Codex",
    repo: "https://github.com/codex-iter/website-frontend",
    website: "http://codex-frontend.vercel.app",
    title: "Codex - We code, we explore",
    description: "We are a group of motivated coders from ITER who wish to create an environment for anyone who wishes to begin their coding journey.",
    image: "http://codex-frontend.vercel.app/banner.jpg",
};

const siteConfig = {
    name: shared.name,
    image: shared.image,
    type: "website",
    title: shared.title,
    titleTemplate: "%s - Codex",
    description: shared.description,
    stats: {
        members: 100,
        commits: 2.1,
        projects: 35,
        workshops: 18,
    },
    newsletterUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdOp_wsPsjwFvxhSRECAxBsUGeL2s4cjJ1SghNLgNPg7f8bHQ/viewform",
    siteUrl: shared.website,
    contacts: {
        instagram: "https://www.instagram.com/codexiter",
        youtube: "https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA",
        github: "https://github.com/codex-iter",
        facebook: "https://www.facebook.com/codexiter",
        linkedin: "https://www.linkedin.com/company/codex-iter",
        telegram: "https://telegram.me/codex4all",
        twitter: "https://twitter.com/iterCodex",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: shared.website,
        title: shared.title,
        site_name: shared.name,
        description: shared.description,
        images: [{
            url: "http://codex-frontend.vercel.app/banner.png",
            width: 1200,
            height: 630,
            alt: "Codex - We code, we explore",
        }, ],
    },
};

export default siteConfig;