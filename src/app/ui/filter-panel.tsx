import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FilterPanel() {
  return (
    <div className="flex items-center my-2 text-gray-500">
      <div className="w-3/4 flex items-center justify-start gap-3">
        <div>
          <ChevronLeftIcon className="w-5" />
        </div>
        <div>Mar 2024</div>
        <div>
          <ChevronRightIcon className="w-5" />
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end gap-7">
        <Link href="/bookmarks" className="block hover:text-gray-950">
          <StarIcon className="w-6" />
        </Link>
        <Link href="/search" className="block hover:text-gray-950">
          <MagnifyingGlassIcon className="w-6" />
        </Link>
        <Link href="/filter" className="block hover:text-gray-950">
          <AdjustmentsHorizontalIcon className="w-6" />
        </Link>
      </div>
    </div>
  );
}
