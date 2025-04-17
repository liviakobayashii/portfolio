"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@iconify/react";
import Li from "./li";
import { useState } from "react";

export default function SheetItem() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Icon
            icon="material-symbols:menu-rounded"
            className="text-neutral-200 size-10"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-col gap-10">
            <SheetTitle className="text-fuchsia-600 text-2xl font-bold">
              Links internos
            </SheetTitle>
            <SheetDescription asChild>
              <ul className="flex flex-col gap-5">
                <Li onNavigate={() => setOpen(false)} />
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
