/* eslint-disable max-len */
import styled from 'styled-components';
import colors from '../utils/Colors';
import MediaQuery from '../utils/MediaQueries';
import {lighten} from 'polished';

const Button = styled.button`
  background: ${(props) => props.secondary ? `none`:colors.primary};
  border: none;
  color: ${(props) => props.secondary ? colors.primary:colors.white};
  display: inline-block;
  font-size: 1rem;
  margin: 0.1rem;
  padding: 0.5rem 1rem;
  transition: all color 0.3s ease;
  cursor: ${(props) => props.secondary ? `pointer`: `default`};

  &:hover {
    background: ${(props) => props.secondary ? `none`:lighten(0.05, colors.primary)};
    color: ${(props) => props.secondary ? lighten(0.05, colors.primary):colors.white};
    text-decoration: ${(props) => props.secondary ? `underline`:`none`};
  }

  &:disabled {
    background: ${(props) => props.secondary ? `none`:colors.midgrey};
    color: ${(props) => props.secondary ? colors.midgrey:colors.white};
    text-decoration: none !important;
    cursor: default !important;
  }

  ${MediaQuery.md`
    margin: 0.15rem;
    padding: 0.65rem 1rem;
  `}
`;

export default Button;
