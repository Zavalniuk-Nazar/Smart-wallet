import Info from "@/app/ui/transactions/info";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Info />
      <div>{children}</div>
    </div>
  );
}
