import styled from "styled-components";

const StyledAlert = styled.div`
    padding: 12px 10px;

    margin-bottom: 15px;

    border: 1px solid transparent;

    border-radius: 4px;

    color: #6e88af;

    background-color: ${(props) => props.theme[props.variant] || "#031633"};

    border-color: ${(props) => props.theme[props.variant] || "#b8daff"};
`;

export { StyledAlert };
