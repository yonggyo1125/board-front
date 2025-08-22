'use client'
import { usePathname } from 'next/navigation'
import useUser from '../hooks/useUser'
import loadable from '@loadable/component'
import styled from 'styled-components'
const AdminHeader = loadable(() => import('../outlines/admin/Header'))
const AdminSide = loadable(() => import('../outlines/admin/Side'))
const AdminSubMenu = loadable(() => import('../outlines/admin/SubMenu'))

const Header = loadable(() => import('../outlines/Header'))
const Footer = loadable(() => import('../outlines/Footer'))
const MainMenu = loadable(() => import('../outlines/MainMenu'))

const AdminMain = styled.main`
  display: flex;
  min-height: 850px;
  aside {
    width: 220px;
  }
  section.admin-content {
    flex-grow: 1;
    padding: 30px 50px;
  }
`

export default function LayoutContainer({ children }) {
  const { isAdmin } = useUser()
  const pathname = usePathname()

  return isAdmin && pathname.startsWith('/admin') ? (
    <>
      <AdminHeader />
      <AdminMain>
        <AdminSide />
        <section className="admin-content">
          <AdminSubMenu />
          {children}
        </section>
      </AdminMain>
    </>
  ) : (
    <>
      <Header />
      <MainMenu />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  )
}
