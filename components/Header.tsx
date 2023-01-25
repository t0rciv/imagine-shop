import { Container } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Logo from "../assets/logo.png";
import Cart from "../assets/carrinho.png";

export default function Header() {
  return (
    <StyledHeader>
      <Navbar>
        <Image src={Logo} width={200} height={100} alt="Logo ImagineShop" />
        <MenuList>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">Sobre</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/shopping-cart">
              <Image
                src={Cart}
                width={52}
                height={52}
                alt="Carrinho de compras"
              />
            </Link>
          </MenuItem>
        </MenuList>
      </Navbar>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  margin: 1.87rem 0 3.125rem 0;
`;

const Navbar = styled.nav`
  ${Container};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  align-items: center;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
