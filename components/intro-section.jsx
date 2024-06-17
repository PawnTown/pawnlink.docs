import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="mt-8">
      <div className="mx-8 flex justify-center items-center">
        <Link
          href="#"
          className="flex transition-all ease-out items-center justify-start pr-4 gap-4 w-80 rounded-full border p-1 bg-gradient-to-r to-content1d/70 from-content1d border-content2d hover:pr-2 dark:border-content2 dark:to-content1/70 dark:from-content1"
        >
          <span className="text-xs font-bold text-green-400/80 border-green-400/80 border-[1px] bg-green-400/10 px-2 py-0.5 rounded-full">
            BETA
          </span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 grow">
            Read the changelog
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
              className="fill-gray-700 dark:fill-white"
            />
          </svg>
        </Link>
      </div>
      <h1 className="my-12 text-3xl font-extrabold text-gray-900 text-center dark:text-foreground md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary">
          Link Chessboards
        </span>
        &nbsp;to your
        <br />
        Websites and Apps
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
        Pawnlink is a open-source platform for linking chessboards to websites
        and apps.
      </p>
      <div className="flex justify-center mt-8 gap-2">
        <Link
          href="/docs/introduction"
          type="button"
          className="w-44 flex gap-2 justify-center py-3 text-center text-md font-semibold border !bg-content2d dark:!bg-content1 dark:!border-content2 rounded-xl transition-all ease-out hover:!border-gray-700 dark:hover:!border-primary/70 dark:hover:text-primary"
        >
          <span>Quickstart</span>🚀
        </Link>
      </div>
    </section>
  );
}
