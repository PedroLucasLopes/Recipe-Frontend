"use client";
import styled from "styled-components";

export const LoginContainer = styled.div`
  margin-top: 7rem;
`;

export const Header = styled.header`
  font-size: 2.5rem;
  margin: 1rem auto;
  text-align: center;
  width: 100%;
  max-width: 1024px;
  height: 100%;
`;

export const Main = styled.main`
  max-width: 1024px;
  height: 40rem;
  max-height: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 0 auto;
`;

export const LeftGrid = styled.div`
  background-color: #ffccb3;
  border-radius: 7px;
  height: 100%;
  position: relative;
`;

export const GridTitle = styled.h2`
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  font-size: 1.6rem;
  line-height: 1.2;

  span {
    font-size: 3.5rem;
    display: block;
  }
`;

export const RightGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    button {
      width: 8rem;
      margin-left: calc(100% - 8rem);
      border: 1px solid #131313;
    }
  }

  label {
    input {
      margin-bottom: 1.2rem;
      width: 25rem;
    }
  }

  p {
    margin-top: 1rem;

    a {
      text-decoration: underline;
    }
  }
`;

export const LoginInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 1.6rem;
  }
`;
