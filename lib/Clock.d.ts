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
 * @requires moment-timezone
 */
declare const Clock: React.FC<ClockProps>;
export default Clock;
//# sourceMappingURL=Clock.d.ts.map