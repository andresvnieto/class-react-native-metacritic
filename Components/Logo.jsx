import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Logo = (props) => (
  <Svg width={44} height={44} fillRule="evenodd" {...props}>
    <Path d="m12 1.2 10.5 5.7L12 12.8 1.5 7.1 12 1.2zM12 0c-.2 0-.4.1-.6.2L.4 6.3c-.6.4-.6 1.2 0 1.5l11 6c.2.1.4.1.5.1.2 0 .4-.1.6-.2l11-6.1c.6-.4.6-1.2 0-1.6l-11-6H12z" />
    <Path d="M12.1 18.9c-.3 0-.5-.1-.8-.2L.7 12.8c-.5-.2-.7-.7-.7-1.1 0-.5.2-.9.7-1.2l.6-.4c.2-.2.5-.1.7.1.2.2.1.5-.1.7l-.6.4c-.3.1-.3.3-.3.4 0 .1 0 .2.2.3l10.6 5.9c.2.1.4.1.6 0l10.5-6c.2-.1.2-.3.2-.3 0-.1 0-.2-.2-.3l-.6-.3c-.2-.1-.4-.4-.2-.7.1-.2.4-.3.7-.2l.5.3c.5.3.7.7.7 1.2s-.2.9-.7 1.2l-10.5 6c-.2 0-.5.1-.7.1z" />
    <Path d="M12.1 24c-.3 0-.5-.1-.8-.2L.7 17.9c-.5-.2-.7-.7-.7-1.2s.2-.9.7-1.2l.6-.4c.2-.2.5-.1.7.1.1.3 0 .6-.2.8l-.6.4c-.2.1-.2.3-.2.3 0 .1 0 .2.2.3l10.6 5.9c.2.1.4.1.6 0l10.5-6c.2-.1.2-.3.2-.3 0-.1 0-.2-.2-.3l-.6-.3c-.2-.1-.4-.4-.2-.7.1-.2.4-.3.7-.2l.5.3c.5.3.7.7.7 1.2s-.2.9-.7 1.2l-10.5 6c-.2.1-.5.2-.7.2z" />
  </Svg>
);

export default Logo;
