import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ac-repair",
        destination: "/services/ac-repair",
        permanent: true,
      },
      {
        source: "/washing-machine-repair",
        destination: "/services/washing-machine-repair",
        permanent: true,
      },
      {
        source: "/tv-repair",
        destination: "/services/tv-repair",
        permanent: true,
      },
      {
        source: "/microwave-repair",
        destination: "/services/microwave-repair",
        permanent: true,
      },
      {
        source: "/refrigerator-repair",
        destination: "/services/refrigerator-repair",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
