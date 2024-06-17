"use client";
import Image from "next/image";

export default function Brands() {
  return (
    <section className="mt-28">
      <h2 className="font-semibold text-4xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
          One Library, All Boards
        </span>
      </h2>
      <p className="text-lg text-center mt-4 text-white/30">
        Discover our comprehensive library that supports all major boards.
        Seamlessly integrate and enhance your application experience with our
        diverse range of compatible platforms, including DGT, Millennium,
        Certabo, and Chessnut.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex justify-center items-center h-48 rounded-xl border bg-gradient-to-br from-content2d/90 to-content2d dark:from-content1/90 dark:to-content1 dark:!border-content2">
          <Image src="/pawnlink.docs/img/dgt.png" width={144} height={144} />
        </div>
        <div className="flex justify-center items-center h-48 rounded-xl border bg-gradient-to-br from-content2d/90 to-content2d dark:from-content1/90 dark:to-content1 dark:!border-content2">
          <Image
            src="/pawnlink.docs/img/millennium.png"
            width={184}
            height={184}
          />
        </div>
        <div className="flex justify-center items-center h-48 rounded-xl border bg-gradient-to-br from-content2d/90 to-content2d dark:from-content1/90 dark:to-content1 dark:!border-content2">
          <Image
            src="/pawnlink.docs/img/certabo.png"
            width={184}
            height={184}
          />
        </div>
        <div className="flex justify-center items-center h-48 rounded-xl border bg-gradient-to-br from-content2d/90 to-content2d dark:from-content1/90 dark:to-content1 dark:!border-content2">
          <Image
            src="/pawnlink.docs/img/chessnut.png"
            width={184}
            height={184}
          />
        </div>
      </div>
    </section>
  );
}
