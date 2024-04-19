import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col mt-10 gap-y-4 justify-center items-center">
      <div className="bg-zinc-300  p-12 rounded-full items-center justify-between flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      </div>

      <h1 className="font-bold text-3xl">404 - Not Found</h1>
      <Link href={"/"} className="mt-10 py-2 px-4 font-bold underline underline-offset-4">Go to Main</Link>
    </div>
  );
}
