"use client";
import dynamic from "next/dynamic";

const LiveDemo = dynamic(() => import("./live-demo"), {
  ssr: false,
});

export default function LiveDemoLazy() {
  return <LiveDemo />;
}
