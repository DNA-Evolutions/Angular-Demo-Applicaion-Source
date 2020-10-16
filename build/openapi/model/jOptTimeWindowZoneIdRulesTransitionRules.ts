/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JOptTimeWindowZoneIdRulesStandardOffset } from './jOptTimeWindowZoneIdRulesStandardOffset';
import { LocalTime } from './localTime';


export interface JOptTimeWindowZoneIdRulesTransitionRules { 
    month?: JOptTimeWindowZoneIdRulesTransitionRules.MonthEnum;
    timeDefinition?: JOptTimeWindowZoneIdRulesTransitionRules.TimeDefinitionEnum;
    standardOffset?: JOptTimeWindowZoneIdRulesStandardOffset;
    offsetBefore?: JOptTimeWindowZoneIdRulesStandardOffset;
    offsetAfter?: JOptTimeWindowZoneIdRulesStandardOffset;
    dayOfWeek?: JOptTimeWindowZoneIdRulesTransitionRules.DayOfWeekEnum;
    dayOfMonthIndicator?: number;
    localTime?: LocalTime;
    midnightEndOfDay?: boolean;
}
export namespace JOptTimeWindowZoneIdRulesTransitionRules {
    export type MonthEnum = 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER';
    export const MonthEnum = {
        JANUARY: 'JANUARY' as MonthEnum,
        FEBRUARY: 'FEBRUARY' as MonthEnum,
        MARCH: 'MARCH' as MonthEnum,
        APRIL: 'APRIL' as MonthEnum,
        MAY: 'MAY' as MonthEnum,
        JUNE: 'JUNE' as MonthEnum,
        JULY: 'JULY' as MonthEnum,
        AUGUST: 'AUGUST' as MonthEnum,
        SEPTEMBER: 'SEPTEMBER' as MonthEnum,
        OCTOBER: 'OCTOBER' as MonthEnum,
        NOVEMBER: 'NOVEMBER' as MonthEnum,
        DECEMBER: 'DECEMBER' as MonthEnum
    };
    export type TimeDefinitionEnum = 'UTC' | 'WALL' | 'STANDARD';
    export const TimeDefinitionEnum = {
        UTC: 'UTC' as TimeDefinitionEnum,
        WALL: 'WALL' as TimeDefinitionEnum,
        STANDARD: 'STANDARD' as TimeDefinitionEnum
    };
    export type DayOfWeekEnum = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
    export const DayOfWeekEnum = {
        MONDAY: 'MONDAY' as DayOfWeekEnum,
        TUESDAY: 'TUESDAY' as DayOfWeekEnum,
        WEDNESDAY: 'WEDNESDAY' as DayOfWeekEnum,
        THURSDAY: 'THURSDAY' as DayOfWeekEnum,
        FRIDAY: 'FRIDAY' as DayOfWeekEnum,
        SATURDAY: 'SATURDAY' as DayOfWeekEnum,
        SUNDAY: 'SUNDAY' as DayOfWeekEnum
    };
}


