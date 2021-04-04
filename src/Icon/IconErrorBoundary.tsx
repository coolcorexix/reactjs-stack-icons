import React from "react";
import styled from "styled-components";

const IconErrorBoundaryContainer = styled.div<{
    width?: number;
    height?: number;
  }>`
    width: ${props => (props.width ? props.width : '24px')};
    height: ${props => (props.height ? props.height : '24px')};
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  export class IconErrorBoundary extends React.Component<
  any,
  {
    hasError: boolean;
  }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <IconErrorBoundaryContainer>!</IconErrorBoundaryContainer>;
    }

    return this.props.children;
  }
}