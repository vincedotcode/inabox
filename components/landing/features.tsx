import { Badge } from "@/components/ui/badge";
import { FlickeringGrid } from "../ui/flickering-grid";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Everything You Need to Build and Grow Your Sales Funnel
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Inabox is designed to empower SMBs with the tools they need to create,
                manage, and optimize their sales funnels seamlessly.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Drag-and-Drop Funnel Builder</h3>
              <p className="text-muted-foreground text-base">
                Design your sales funnel effortlessly with our intuitive drag-and-drop editor.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Customizable Templates</h3>
              <p className="text-muted-foreground text-base">
                Choose from a variety of professional templates tailored for every business need.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Real-Time Analytics</h3>
              <p className="text-muted-foreground text-base">
                Track your funnel’s performance with actionable insights and analytics.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Lead Management</h3>
              <p className="text-muted-foreground text-base">
                Organize and track your leads with a seamless CRM integrated into the platform.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Conversion Optimization</h3>
              <p className="text-muted-foreground text-base">
                Use A/B testing and optimization tools to maximize conversions.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Integrated Payment Solutions</h3>
              <p className="text-muted-foreground text-base">
                Simplify transactions with built-in payment processing options for your funnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
