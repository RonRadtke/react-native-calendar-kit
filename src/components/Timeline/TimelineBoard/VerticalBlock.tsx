import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTimelineCalendarContext } from '../../../context/TimelineProvider';
import type { UnavailableHour, UnavailableItemProps } from '../../../types';

interface VerticalBlockProps {
    dayIndex: number;
    isOutsideLimit: boolean;
    unavailableHour?: UnavailableHour[];
    isDayDisabled?: boolean;
    renderCustomUnavailableItem?: (props: UnavailableItemProps) => JSX.Element;
}

const VerticalBlock: React.FC<VerticalBlockProps> = ({
                                                         dayIndex,
                                                     }) => {
    const { columnWidth, theme } = useTimelineCalendarContext();


    return (
        <View
            pointerEvents="box-none"
            style={[
                styles.verticalBlock,
                {
                    left: columnWidth * dayIndex,
                    width: columnWidth,
                },
            ]}
        >
            <View
                style={[
                    styles.verticalLine,
                    { backgroundColor: theme.cellBorderColor },
                ]}
            />
        </View>
    );
};

export default memo(VerticalBlock);

const styles = StyleSheet.create({
    verticalBlock: { position: 'absolute', height: '100%' },
    verticalLine: {
        width: 1,
        backgroundColor: '#E8E9ED',
        position: 'absolute',
        height: '100%',
        right: 0,
    },
});
