import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface props {
  open: boolean;
  setOpen: any;
}

export const DashboardCommand = ({ open, setOpen }: props) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen} title="Search">
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>Test1</CommandItem>
        <CommandItem>Test2</CommandItem>
      </CommandList>
    </CommandDialog>
  );
};
