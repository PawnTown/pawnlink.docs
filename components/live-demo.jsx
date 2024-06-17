"use client";
import Image from "next/image";
import { PawnLinkProvider, PawnLinkConnect } from "@pawntown/react-pawnlink";

export default function LiveDemo() {
  return (
    <section className="mt-8">
      <h2>Less Code, more fun</h2>
      <div className="relative pb-24">
        <Image src="/pawnlink.docs/img/editor.svg" width={840} height={400} />
        <div className="absolute bottom-0 right-0 flex flex-col w-72 p-8 rounded-2xl justify-center items-center border bg-gradient-to-br from-content2d/90 to-content2d dark:from-content1/90 dark:to-content1 dark:!border-content2">
          <PawnLinkProvider host="link.pawn.town" api-key="TEST-TEST-TEST">
            <PawnLinkConnect
              className="w-52 h-52 rounded-2xl bg-[#c38fff] bg-gradient-to-r from-[#c38fff] to-[#c05569] text-white"
              qrColor="black"
              permissions="allow_read,allow_write"
            ></PawnLinkConnect>
          </PawnLinkProvider>
          <section className="mt-5 text-center">
            <h1 className="font-bold mb-2">Connect Chessboard</h1>
            <p className="dark:text-white/70">
              Scan the QR code with your
              <a
                className="mx-1 text-primary"
                target="_blank"
                href="https://pawntown.github.io/pawnlink.docs/"
              >
                PawnLink App
              </a>
              to connect your chessboard.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
