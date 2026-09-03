import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <DockIcon>
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors hover:bg-accent hover:text-accent-foreground size-12"
                  >
                    <item.icon className="size-4" />
                  </a>
                </DockIcon>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={12}>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-full py-2 m-auto w-[1px] bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <DockIcon>
                    <a
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors hover:bg-accent hover:text-accent-foreground size-12"
                    >
                      <IconComponent className="size-4" />
                    </a>
                  </DockIcon>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={12}>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-full py-2 m-auto w-[1px] bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon>
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors hover:bg-accent hover:text-accent-foreground size-12">
                <ModeToggle className="size-4 cursor-pointer bg-transparent shadow-none border-none p-0 hover:bg-transparent" />
              </div>
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={12}>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
