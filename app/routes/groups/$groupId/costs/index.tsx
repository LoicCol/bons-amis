import { Outlet } from "@remix-run/react";
export default function CostsIndexPage() {
  return (
    <>
      <Outlet />
      <p>Costs Index</p>
    </>
  );
}
