import styled from "styled-components";

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;
  padding: 6.4rem 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  div {
    text-align: center;
    line-height: 140%;
    
    h3 {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-weight: 700;
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-weight: 400;
    }
  }
`;