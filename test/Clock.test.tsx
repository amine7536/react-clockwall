import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import Clock, { ClockConfig } from '../src/components/Clock';

describe('Clock Component', () => {
  beforeEach(() => {
    // Use fake timers to control time in tests
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-01-15T12:30:45Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render with required props', () => {
    const config: ClockConfig = {
      timezone: 'America/New_York',
      town: 'New York',
    };

    render(<Clock config={config} />);

    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText(/America\/New_York/)).toBeInTheDocument();
  });

  it('should apply default id when not provided', () => {
    const config: ClockConfig = {
      timezone: 'Europe/Paris',
      town: 'Paris',
    };

    const { container } = render(<Clock config={config} />);
    const clockDiv = container.querySelector('#pixelfactory-Paris');

    expect(clockDiv).toBeInTheDocument();
  });

  it('should use custom id when provided', () => {
    const config: ClockConfig = {
      timezone: 'Europe/Paris',
      town: 'Paris',
      id: 'custom-clock-id',
    };

    const { container } = render(<Clock config={config} />);
    const clockDiv = container.querySelector('#custom-clock-id');

    expect(clockDiv).toBeInTheDocument();
  });

  it('should hide town when showTown is false', () => {
    const config: ClockConfig = {
      timezone: 'Europe/Paris',
      town: 'Paris',
      showTown: false,
    };

    render(<Clock config={config} />);

    expect(screen.queryByText('Paris')).not.toBeInTheDocument();
  });

  it('should hide timezone when showTimezone is false', () => {
    const config: ClockConfig = {
      timezone: 'Europe/Paris',
      town: 'Paris',
      showTimezone: false,
    };

    render(<Clock config={config} />);

    expect(screen.queryByText(/Europe\/Paris/)).not.toBeInTheDocument();
  });

  it('should hide date when showDate is false', () => {
    const config: ClockConfig = {
      timezone: 'Europe/Paris',
      town: 'Paris',
      showDate: false,
    };

    const { container } = render(<Clock config={config} />);
    const dateElement = container.querySelector('.date');

    expect(dateElement).not.toBeInTheDocument();
  });

  it('should display time elements', () => {
    const config: ClockConfig = {
      timezone: 'UTC',
      town: 'London',
    };

    const { container } = render(<Clock config={config} />);

    expect(container.querySelector('.hours')).toBeInTheDocument();
    expect(container.querySelector('.minutes')).toBeInTheDocument();
    expect(container.querySelector('.seconds')).toBeInTheDocument();
  });

  it('should show meridiem when meridiem is true', () => {
    const config: ClockConfig = {
      timezone: 'America/New_York',
      town: 'New York',
      meridiem: true,
    };

    const { container } = render(<Clock config={config} />);
    const meridiemElement = container.querySelector('.meridiem');

    expect(meridiemElement).toBeInTheDocument();
  });

  it('should not show meridiem when meridiem is false', () => {
    const config: ClockConfig = {
      timezone: 'America/New_York',
      town: 'New York',
      meridiem: false,
    };

    const { container } = render(<Clock config={config} />);
    const meridiemElement = container.querySelector('.meridiem');

    expect(meridiemElement).not.toBeInTheDocument();
  });

  it('should have all required CSS classes', () => {
    const config: ClockConfig = {
      timezone: 'Europe/Paris',
      town: 'Paris',
    };

    const { container } = render(<Clock config={config} />);

    expect(container.querySelector('.clock')).toBeInTheDocument();
    expect(container.querySelector('.town')).toBeInTheDocument();
    expect(container.querySelector('.timezone')).toBeInTheDocument();
    expect(container.querySelector('.time')).toBeInTheDocument();
    expect(container.querySelector('.date')).toBeInTheDocument();
  });
});
