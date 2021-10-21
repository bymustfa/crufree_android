import {TextInput} from "react-native";
import styled from "styled-components/native";
import {colors} from "../../utils/theme";
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius,
  position,
  background,
  typography,
} from "styled-system";

const Input = styled(TextInput)(
  compose(
    compose,
    color,
    size,
    space,
    border,
    flexbox,
    borderRadius,
    position,
    background,
    typography,
  ),
);

Input.defaultProps = {
  placeholderTextColor: colors.icons,
};

export default Input;
