import times from 'lodash/times';
import React from 'react';
import {GestureResponderEvent, StyleSheet, TouchableWithoutFeedback, View, ViewStyle} from 'react-native';
import {COLUMNS, SECONDS_IN_DAY} from '../../../constants';
import {useTimelineCalendarContext} from '../../../context/TimelineProvider';
import type {UnavailableItemProps} from '../../../types';
import type {HourItem} from '../TimelineHours';
import HorizontalLine from './HorizontalLine';
import VerticalBlock from './VerticalBlock';

interface TimelineBoardProps {
    startDate: Date;
    onPressBackgroundHandler: (
        type: 'longPress' | 'press' | 'pressOut',
        event: GestureResponderEvent,
    ) => void;
    holidays?: string[];
    renderCustomUnavailableItem?: (props: UnavailableItemProps) => JSX.Element;
    renderHalfLineCustom?: (width: number) => JSX.Element;
    halfLineContainerStyle?: ViewStyle;
}

const TimelineBoard = ({
                           holidays,
                           startDate,
                           onPressBackgroundHandler,
                           renderCustomUnavailableItem,
                           renderHalfLineCustom,
                           halfLineContainerStyle,
                       }: TimelineBoardProps) => {
    const {
        hours,
        viewMode,
        isShowHalfLine,
        minDate,
        maxDate,
    } = useTimelineCalendarContext();

    const _renderHorizontalLine = ({hourNumber}: HourItem, index: number) => {
        return (
            <React.Fragment key={`line_${hourNumber}`}>
                <HorizontalLine hourIndex={index}/>
                {isShowHalfLine &&
                    <HorizontalLine
                        hourIndex={index + 0.5}
                        renderHalfLineCustom={renderHalfLineCustom}
                        containerStyle={halfLineContainerStyle}
                    />
                }
                {index === hours.length - 1 && <HorizontalLine hourIndex={index + 1}/>}
            </React.Fragment>
        );
    };

    const minDayUnix = minDate.unix();
    const maxDayUnix = maxDate.unix();
    const startDayUnix = startDate.unix();

    const _renderVerticalBlock = (dayIndex: number) => {
        const currentUnix = startDayUnix + dayIndex * SECONDS_IN_DAY;
        const isLtMin = currentUnix - minDayUnix < 0;
        const isGtMax = maxDayUnix - currentUnix < 0;

        let isDayDisabled = false;
        if (holidays?.length) {
            const dateStr = new Date(currentUnix * 1000).format('dd-MM-yyyy');
            isDayDisabled = holidays.includes(dateStr);
        }

        return (
            <VerticalBlock
                key={dayIndex}
                dayIndex={dayIndex}
                isOutsideLimit={isLtMin || isGtMax}
                isDayDisabled={isDayDisabled}
                renderCustomUnavailableItem={renderCustomUnavailableItem}
            />
        );
    };

    const numOfDays = COLUMNS[viewMode];

    return (
        <View style={StyleSheet.absoluteFill}>
            {times(numOfDays, _renderVerticalBlock)}
            {hours.map(_renderHorizontalLine)}
            <TouchableWithoutFeedback
                delayLongPress={300}
                onPress={(e) => onPressBackgroundHandler('press', e)}
                onLongPress={(e) => onPressBackgroundHandler('longPress', e)}
                onPressOut={(e) => onPressBackgroundHandler('pressOut', e)}
            >
                <View style={StyleSheet.absoluteFill}/>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default TimelineBoard;
