import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Simplify Your Sales Funnel</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Supercharge Your Sales Funnel Today!
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Struggling with clunky, outdated tools to manage your sales
              pipeline? Inabox empowers your business to create seamless,
              high-converting sales funnels with ease. Build, track, and grow
              your leads – all in one powerful platform designed for modern
              SMBs.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline">
              Schedule a Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4">
              Start Building Now <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
