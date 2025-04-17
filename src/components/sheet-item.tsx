import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@iconify/react/dist/iconify.js";
import Li from "./li";

export default function SheetItem() {
  return (
    <div className="lg:hidden">
      <Sheet>
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
                <Li />
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
