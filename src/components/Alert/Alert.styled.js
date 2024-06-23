import styled from "styled-components";

const StyledAlert = styled.div`
    padding: 0.75rem 1.25rem;

    margin-bottom: 1rem;

    border: 1px solid transparent;

    border-radius: 0.25rem;

    color: #004085;

    background-color: ${(props) => props.theme[props.variant] || "#031633"};

    border-color: ${(props) => props.theme[props.variant] || "#6ea8fe"};
`;

export { StyledAlert };
