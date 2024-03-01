import styled from "styled-components";

export const HomeContainer = styled.main`
  height: calc(100vh - 20rem);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 0 6rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 73.6rem;
  margin: 0 auto;

  gap: 7.8rem;
`;

export const InputDiv = styled.div`
  display: flex;

  gap: 8px;
  position: relative;
  transform: translateY(-2.5rem);
  
  label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;    
  }
`;

export const InputAddTask = styled.input`
  flex: 1;
  padding: 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: ${({ theme }) => theme.COLORS.GRAY_500};

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;  
  border-radius: 8px;

  font-family: 'Inter', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const ButtonAddTask = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  gap: 8px;
  padding: 1.6rem;

  background: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 8px;
  border: none;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: 700;
  font-size: 1.4rem;

  &:hover {
    background: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  .listttt {
    overflow-y: auto;

  }
`;

export const HeaderList = styled.header`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    span {
      background: ${({ theme }) => theme.COLORS.GRAY_400};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      border-radius: 50%;
      padding: 2px 8px;
    }
  }

  .createdTasks {
    p {
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  .finishedTasks {
    p {
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`;