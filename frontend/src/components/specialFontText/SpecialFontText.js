import styled from 'styled-components';

const StyledSpecialFontText = styled.p`
font-family: 'Cedarville Cursive', cursive;
font-size: ${(props) => props.fontSize || 'inherit'};   
`;

const SpecialFontText = ({ as = 'p', children, fontSize, ...rest }) => {
  return <StyledSpecialFontText as={as} fontSize={fontSize} {...rest}>{children}</StyledSpecialFontText>;
};

export default SpecialFontText;

