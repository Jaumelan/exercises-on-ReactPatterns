import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #428bca;
  border: 1px solid #428bca;
`;

export const SuccessButton = styled(BaseButton)`
  background-color: #5cb85c;
  border: 1px solid #5cb85c;
`;

export const DangerButton = styled(BaseButton)`
  background-color: #d9534f;
  border: 1px solid #d9534f;
`;
