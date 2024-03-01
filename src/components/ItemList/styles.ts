import styled from "styled-components";

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  .wrapper {
    display: flex;
    align-items: flex-start;

    gap: 1.2rem;

    padding: 1.6rem;
  
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 8px;

    label {
      font-size: 1.4rem;
      line-height: 140%;
    }

    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      width: 2rem;
      height: 2rem;

      border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
      border-radius: 50%;
      cursor: pointer;
    }

    input[type="checkbox"]:after {
      content: "";
      color: black;
    }

    input[type="checkbox"]:checked {
      border: none;
      
      background: url("data:image/svg+xml,%3Csvg width='10'   height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342154L4.09865 4.67409L1.61618 2.19162L0.780273 3.02753L4.09865 6.3459L9.26649 1.17806L8.43059 0.342154Z' fill='%23F2F2F2'/%3E%3C/svg%3E ") center no-repeat;
      background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    }

    .strikethrough-label {
      text-decoration: line-through;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    button {
      background: none;
      border: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  } 
`;