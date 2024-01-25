import { Outlet } from "@remix-run/react";

export default function GroupDetailsIndexPage() {
  return (
    <>
      <Outlet />
      <p>Group Details Index</p>
    </>
  );
}
