/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.6rem;
  padding: 1.6rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }

  &:has(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--color-grey-800);
`;

const Input = styled.input`
  padding: 1.2rem;
  font-size: 1.4rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.4rem;
  outline: none;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 4px var(--color-primary);
  }
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red-700);
  margin-top: -0.8rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: #fff;
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const FormRowVetical = ({ label, error, children }) => {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRowVetical;
