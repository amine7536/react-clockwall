/**
 * @fileOverview Clock Component
 * @author amine.benseddik@pixelfactory.io
 * @module Components
 */
import { useState, useEffect, useMemo } from 'react';
import { TZDate } from '@date-fns/tz';
import { format, getDate, getMonth, getYear, getHours, getMinutes, getSeconds } from 'date-fns';
import { getLocale } from './locales';

/**
 * Clock configuration interface
 */
export interface ClockConfig {
  /** Required - IANA timezone (e.g., 'Europe/Paris') */
  timezone: string;
  /** Required - Town name to display */
  town: string;
  /** Optional - CSS id (default: 'pixelfactory-{town}') */
  id?: string;
  /** Optional - ISO language code (default: 'en') */
  locale?: string;
  /** Optional - Show town name (default: true) */
  showTown?: boolean;
  /** Optional - Show timezone (default: true) */
  showTimezone?: boolean;
  /** Optional - Show date (default: true) */
  showDate?: boolean;
  /** Optional - Use 12-hour format (default: false) */
  meridiem?: boolean;
}

/**
 * Clock component props
 */
export interface ClockProps {
  /** Clock configuration object */
  config: ClockConfig;
}

/**
 * Time and date information
 */
interface MomentData {
  day: number;
  dayName: string;
  month: number;
  monthName: string;
  year: number;
  hours: string;
  minutes: string;
  seconds: string;
  meridiem: 'AM' | 'PM';
  timezone: string;
}

/**
 * Clock React Component
 *
 * Modern TypeScript implementation using React hooks
 *
 * @example
 * ```tsx
 * <Clock config={{ timezone: 'Europe/Paris', town: 'Paris' }} />
 * ```
 *
 * Required params:
 * - **config.timezone** : [ISO Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
 * - **config.town** : Town name to display
 *
 * Default values:
 * - **config.id** : CSS `#id` (default: `pixelfactory-town`)
 * - **config.locale** : ISO language code (default: `en`)
 * - **config.showTown** : Include TOWN name in rendered html (default: `true`)
 * - **config.showTimezone** : Include TIMEZONE name in rendered html (default: `true`)
 * - **config.showDate** : Include DATE in rendered html (default: `true`)
 * - **config.meridiem** : Use 12 hour clock (default: `false`)
 *
 * @requires date-fns
 * @requires @date-fns/tz
 */
function Clock({ config }: ClockProps) {
  // Apply default values using useMemo to avoid recalculation
  const clockConfig = useMemo<Required<ClockConfig>>(() => ({
    id: config.id ?? `pixelfactory-${config.town}`,
    timezone: config.timezone,
    town: config.town,
    locale: config.locale ?? 'en',
    showTown: config.showTown ?? true,
    showTimezone: config.showTimezone ?? true,
    showDate: config.showDate ?? true,
    meridiem: config.meridiem ?? false,
  }), [config]);

  /**
   * Get current time and date using date-fns
   *
   * @param timezone - IANA Timezone
   * @param locale - ISO Language Code
   * @param useMeridiem - Whether to use 12-hour format
   * @returns Time and date information object
   */
  const getMoment = (
    timezone: string,
    locale: string,
    useMeridiem: boolean,
  ): MomentData => {
    // Create a date in the specified timezone
    const now = new TZDate(new Date(), timezone);

    // Get the date-fns locale object
    const dateFnsLocale = getLocale(locale);

    // Get timezone abbreviation (e.g., 'PST', 'EST')
    const tz = format(now, 'zzz', { locale: dateFnsLocale });

    // Day
    const dayName = format(now, 'EEEE', { locale: dateFnsLocale });
    const day = getDate(now);

    // Month
    const monthName = format(now, 'MMMM', { locale: dateFnsLocale });
    const month = getMonth(now);

    // Year
    const year = getYear(now);

    // Time
    let hours = getHours(now);
    const meridiem: 'AM' | 'PM' = hours < 12 ? 'AM' : 'PM';
    hours = useMeridiem && meridiem === 'PM' ? hours - 12 : hours;
    const minutes = getMinutes(now);
    const seconds = getSeconds(now);

    // Return time object
    return {
      day,
      dayName,
      month,
      monthName,
      year,
      hours: (hours < 10 ? '0' : '') + hours,
      minutes: (minutes < 10 ? '0' : '') + minutes,
      seconds: (seconds < 10 ? '0' : '') + seconds,
      meridiem,
      timezone: tz,
    };
  };

  // State for current date/time
  const [currentDate, setCurrentDate] = useState<MomentData>(() => getMoment(
    clockConfig.timezone,
    clockConfig.locale,
    clockConfig.meridiem,
  ));

  // Effect to update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(
        getMoment(clockConfig.timezone, clockConfig.locale, clockConfig.meridiem),
      );
    }, 1000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [clockConfig.timezone, clockConfig.locale, clockConfig.meridiem]);

  const {
    timezone,
    hours,
    minutes,
    seconds,
    meridiem,
    dayName,
    day,
    monthName,
    year,
  } = currentDate;

  return (
    <div id={clockConfig.id} className="clock">
      {clockConfig.showTown && <h1 className="town">{clockConfig.town}</h1>}
      {clockConfig.showTimezone && (
        <h2 className="timezone">
          {clockConfig.timezone}
          {' '}
          {timezone}
        </h2>
      )}
      <ul className="time">
        <li className="hours">{hours}</li>
        <li className="points">:</li>
        <li className="minutes">{minutes}</li>
        <li className="sectional">
          <sup className="seconds">{seconds}</sup>
          {clockConfig.meridiem && <sub className="meridiem">{meridiem}</sub>}
        </li>
      </ul>
      {clockConfig.showDate && (
        <h1 className="date">
          {dayName}
          {' '}
          {day}
          {' '}
          {monthName}
          {' '}
          {year}
        </h1>
      )}
    </div>
  );
}

export default Clock;
