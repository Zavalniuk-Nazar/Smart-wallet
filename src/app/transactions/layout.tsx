import NavLinks from "@/app/ui/transactions/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLinks />
      <div>{children}</div>
    </div>
  );
}
