import React, { useMemo } from "react";
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

const SheetBackdrop = ({ animatedIndex, style }) => {
	// animated variables
	const containerAnimatedStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			animatedIndex.value,
			[0, 1],
			[0, 1],
			Extrapolate.CLAMP
		),
	}));
	
	// styles
	const containerStyle = useMemo(
		() => [
			style,
			{
				backgroundColor: "#a8b5eb",
			},
			containerAnimatedStyle,
		],
		[style, containerAnimatedStyle]
	);
	
	return <Animated.View style={containerStyle} />;
};

export default SheetBackdrop;
