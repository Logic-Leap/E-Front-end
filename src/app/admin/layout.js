import SideBar from "@/components/dashboard/SideBar";

export default function Layout({ children }) {
    return (
      <>
     <SideBar />
        <main>{children}</main>
      
      </>
    )
  }