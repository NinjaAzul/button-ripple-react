import { lighten, shade } from "polished";
import styled, { css } from "styled-components";

interface RippleProps {
  backgroundColor: string;
  left: number;
  top: number;
}

interface ButtonContainerProps {
  isLoading: boolean;
  backgroundColor: string;
  maxWidth?: string;
  maxHeight?: string;
}

type LoadingComponentProps = {
  isShow: boolean;
  color: string;
};

export const Container = styled.button<ButtonContainerProps>`
  border-radius: 0.313rem;
  border: none;
  padding: 0.713rem 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in;
  width: 100%;
  height: 100%;

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};

    &:hover {
      background-color: ${shade(0.08, backgroundColor)};
    }
  `};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}

  ${({ isLoading }) =>
    isLoading &&
    css`
      color: transparent;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Ripple = styled.span<RippleProps>`
  width: 20px;
  height: 20px;
  position: absolute;
  background: ${({ backgroundColor }) => lighten(0.06, backgroundColor)};
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  display: block;
  content: "";
  border-radius: 9999px;
  opacity: 1;
  animation: 1.5s ease 1 forwards ripple-effect;

  @keyframes ripple-effect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(10);
      opacity: 0.375;
    }
    100% {
      transform: scale(35);
      opacity: 0;
    }
  }
`;

export const Content = styled.span`
  position: relative;
  z-index: 2;
  font-size: 0.938rem;
  font-weight: 500;
`;

export const LoadingComponent = styled.div<LoadingComponentProps>`
  ${({ isShow, color }) =>
    css`
      color: ${color};
      position: absolute;
      inset: 0;
      visibility: ${isShow ? "visible" : "hidden"};
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        animation: loading 1.5s linear infinite;
      }

      @keyframes loading {
        0% {
          transform: rotateZ(0deg);
        }
        100% {
          transform: rotateZ(-360deg);
        }
      }
    `}
`;
