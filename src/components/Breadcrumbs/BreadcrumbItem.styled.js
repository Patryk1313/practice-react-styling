import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
    display: inline;
    margin-right: 0.5rem;
    & + &::before {
        content: "/";
        padding-right: 0.5rem;
    }
    & a {
        text-decoration: none;
        &:hover {
            color: #000eee;
            text-decoration: underline;
        }
    }
    &.active {
        color: #6c757d;
        pointer-events: none;
    }
`;

export { StyledBreadcrumbItem };
