import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
  `,
};

const hoverStyles = {
  primary: css`
    &:hover {
      background-color: #00d8fec7;
    }
  `,
  secondary: css`
    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  outline: none;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  ${(props) => hoverStyles[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

Button.propTypes = {
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
