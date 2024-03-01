import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 20rem;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  justify-content: center;
`;