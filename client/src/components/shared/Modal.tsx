import React from "react";
import { styled } from "styled-components";

interface IModal {
  title: string;
  active: boolean;
  setActive: (item: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
}

export const Modal: React.FC<IModal> = ({
  title,
  active,
  setActive,
  children,
}) => {
  return (
    <ModalWrapper active={active} onClick={() => setActive(false)}>
      <ModalContent active={active} onClick={(e: any) => e.stopPropagation()}>
        <ModalTitle>
          <h3>{title}</h3>
          <button onClick={() => setActive(false)}>&#128473;</button>
        </ModalTitle>

        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div<{ active: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: ${(p) => (p.active ? "all" : "none")};
  opacity: ${(p) => (p.active ? 1 : 0)};
  transition: opacity 0.4s ease-in;
`;

const ModalContent = styled.div<{ active: boolean }>`
  display: flex;
  padding: 27px 24px 24px;
  min-width: 448px;
  min-height: 418px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.039),
    0px 5.5px 16px rgba(0, 0, 0, 0.19);
  border-radius: 24px;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;

  transform: scale(${(props) => (props.active ? 1 : 0.5)});
  transition: transform 0.4s ease-in;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 49.5px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }

  button {
    cursor: pointer;
    font-size: 18px;
  }
`;
