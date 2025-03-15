import { NotFound as NotFoundSVG } from "@/assets/svg";

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <NotFoundSVG className="w-[360px]" />
      <p className="text-xl font-raleway text-center max-w-[360px]">
        Sorry, we couldn't find the page you were looking for.
      </p>
    </div>
  );
}
