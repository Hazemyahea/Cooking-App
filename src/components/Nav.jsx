import Link from "next/link";

export default async function Nav() {
  return (
    <nav className="p-2 bg-orange-500 text-slate-100 flex items-center gap-5 z-50 rounded-md m-2 sticky top-1">
      <h3 className=" text-xl font-black">
        <Link href="/">CookNow</Link>
      </h3>
      <ul className="flex items-center justify-between space-x-4 text-lg">
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
