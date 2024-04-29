export type DatetimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

declare global {
    interface Date {
        isSameOrAfter(o: Date, u: DatetimeUnit): boolean;

        isSameOrBefore(o: Date, u: DatetimeUnit): boolean;

        isAfter(o: Date, u: DatetimeUnit): boolean;

        isBefore(o: Date, u: DatetimeUnit): boolean;

        subtract(x: number, u?: DatetimeUnit): Date;

        add(x: number, u?: DatetimeUnit): Date;

        addDays(x: number): Date;

        unix(): number;

        format(format: string): string;

        diff(other: Date, unit: DatetimeUnit): number;

        isSame(other: Date, unit: DatetimeUnit): boolean;
    }

    interface String {
        format(args: Record<string, string | number>): String;

        splice(offset: number, text: string, removeCount: number): string;

        fromCodePoint(x: number): string;
    }

    interface Array<T> {
        /**
         * This function searches the array for the first element where the check function returns true.
         * @param fn check function returning true for an element if it matches the search
         * @returns: -1 if no matching element was found, otherwise the index of the first match
         */
        findIndex(fn: (arg0: T) => boolean): number;

        /**
         * Moves the given element to the left of the specified target element. Returns a new array without modifying the old one.
         */
        moveToLeftOf(moveelement: any, targetelement: any): T[];

        /**
         * Adds all elements of the given array to us.
         */
        extend(a: Array<T> | Set<T>): void;

        /**
         * Removes the given item from the array if existent, in place.
         * @param e Either a value, or a decision function
         * @param alloccurences=false
         */
        removeItem(e: any | Function, alloccurences: boolean): void;

        /**
         * Removes the given item from the array if existent, or adds it
         * @param e
         * @param alloccurences=false
         */
        toggleItem(e: any, alloccurences: boolean): void;

        /**
         * Sorts the array using the provided callback on each item to receive one or more simple values we can sort on and returns a new sorted array.
         * Note, that negative numbers are sorted differently on different browsers (https://github.com/chakra-core/ChakraCore/issues/4060#issuecomment-339475084).
         * @see: https://stackoverflow.com/a/65496148
         * @param key
         * @param reverse=false
         */
        get_sorted_by(key: (arg0: T) => any, reverse?: boolean): T[];

        lastItem(): T;

        /**
         * Maps the items using the given function but stops after the first one not null or undefined.
         */
        map_one(mapping_function: Function): T | null;

        /**
         * Sums the entries of the array up
         */
        sum(): number;

        /**
         * shift all items to the left, e.g. 1-2-3-4 => 2-3-4-1
         * @param cnt=1
         */
        shiftLeft(cnt: number): T[];

        /**
         * shift all items to the right, e.g. 1-2-3-4 => 4-1-2-3
         * @param cnt=1
         */
        shiftRight(cnt: number): T[];
    }

    interface Set<T> {
        /**
         * Adds all values from the given array to the set
         */
        extend(a: T[] | Set<T>): Set<T>;

        /**
         * @param fn Comparator function
         * @returns: sorted array
         */
        sorted(fn?: (arg0: T, arg1: T) => number): T[];

        toArray(): T[];

        intersection(other: Set<T>): Set<T>;

        difference(other: Set<T>): Set<T>;

        equals(other: Set<any>): boolean;

        toggleItem(item: any): void;
    }
}
export {};
