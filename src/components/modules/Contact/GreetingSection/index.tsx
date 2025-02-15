import { SocialLinks } from "../SocialLinks";

export const GreetingSection = () => {
  return (
    <div className="h-full flex flex-col justify-center lg:pl-12 p-6 md:p-8">
      <div className="flex flex-col gap-6 mt-[-16px]">
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          Let&#8217;s Build the Future Together
        </p>
        <p className="text-left text-lg md:text-2xl text-gray-700 dark:text-gray-300">
          Have an idea or a challenge that needs a tech-driven solution?
          We&#8217;re here to transform your vision into reality. Drop us a
          message, and let&#8217;s make innovation happen.
        </p>
      </div>
      <SocialLinks className="mt-12 hidden lg:flex" />
    </div>
  );
};
