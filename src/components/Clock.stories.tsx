import type { Meta, StoryObj } from '@storybook/react-vite';
import Clock from './Clock';

/**
 * The Clock component displays time and date information for different timezones around the world.
 * It updates every second and supports various customization options.
 */
const meta = {
  title: 'Components/Clock',
  component: Clock,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A real-time clock component that displays time in different timezones with customizable display options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    config: {
      description: 'Configuration object for the clock',
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default clock showing Paris time with all features enabled
 */
export const Default: Story = {
  args: {
    config: {
      timezone: 'Europe/Paris',
      town: 'Paris',
    },
  },
};

/**
 * New York clock with 12-hour format (AM/PM)
 */
export const NewYork12Hour: Story = {
  args: {
    config: {
      timezone: 'America/New_York',
      town: 'New York',
      meridiem: true,
    },
  },
};

/**
 * Tokyo clock with 24-hour format
 */
export const Tokyo: Story = {
  args: {
    config: {
      timezone: 'Asia/Tokyo',
      town: 'Tokyo',
      locale: 'ja',
    },
  },
};

/**
 * London clock with minimal display (time only)
 */
export const MinimalLondon: Story = {
  args: {
    config: {
      timezone: 'Europe/London',
      town: 'London',
      showTown: false,
      showTimezone: false,
      showDate: false,
    },
  },
};

/**
 * Los Angeles clock without timezone display
 */
export const LosAngelesNoTimezone: Story = {
  args: {
    config: {
      timezone: 'America/Los_Angeles',
      town: 'Los Angeles',
      showTimezone: false,
    },
  },
};

/**
 * Sydney clock with French locale
 */
export const SydneyFrench: Story = {
  args: {
    config: {
      timezone: 'Australia/Sydney',
      town: 'Sydney',
      locale: 'fr',
    },
  },
};

/**
 * Dubai clock without date
 */
export const DubaiNoDate: Story = {
  args: {
    config: {
      timezone: 'Asia/Dubai',
      town: 'Dubai',
      showDate: false,
    },
  },
};

/**
 * Multiple clocks displaying different timezones
 */
export const WorldClocks: Story = {
  args: {
    config: {
      timezone: 'Europe/Paris',
      town: 'Paris',
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Clock config={{ timezone: 'Europe/Paris', town: 'Paris' }} />
      <Clock config={{ timezone: 'America/New_York', town: 'New York', meridiem: true }} />
      <Clock config={{ timezone: 'Asia/Tokyo', town: 'Tokyo' }} />
      <Clock config={{ timezone: 'Australia/Sydney', town: 'Sydney' }} />
    </div>
  ),
};
