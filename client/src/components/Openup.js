import { useSpring, animated } from "react-spring";

export default function Openup() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 8000 },
  });
  return <animated.div style={props}>I will fade in</animated.div>;
}
