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

/**
 * Ocean Blue theme - Deep blue background with cyan accents
 */
export const OceanBlueTheme: Story = {
  args: {
    config: {
      timezone: 'Pacific/Honolulu',
      town: 'Honolulu',
      id: 'ocean-blue-clock',
    },
  },
};

/**
 * Sunset Orange theme - Warm gradient colors
 */
export const SunsetOrangeTheme: Story = {
  args: {
    config: {
      timezone: 'America/Los_Angeles',
      town: 'Los Angeles',
      id: 'sunset-orange-clock',
    },
  },
};

/**
 * Cyberpunk Neon theme - Dark background with bright neon colors
 */
export const CyberpunkNeonTheme: Story = {
  args: {
    config: {
      timezone: 'Asia/Tokyo',
      town: 'Tokyo',
      id: 'cyberpunk-neon-clock',
    },
  },
};

/**
 * Forest Green theme - Nature-inspired colors
 */
export const ForestGreenTheme: Story = {
  args: {
    config: {
      timezone: 'America/Vancouver',
      town: 'Vancouver',
      id: 'forest-green-clock',
    },
  },
};

/**
 * Purple Dream theme - Soft purple and lavender colors
 */
export const PurpleDreamTheme: Story = {
  args: {
    config: {
      timezone: 'Europe/Paris',
      town: 'Paris',
      id: 'purple-dream-clock',
    },
  },
};

/**
 * Midnight theme - Dark blues and grays
 */
export const MidnightTheme: Story = {
  args: {
    config: {
      timezone: 'Europe/London',
      town: 'London',
      id: 'midnight-clock',
    },
  },
};

/**
 * Retro Amber theme - Classic terminal look
 */
export const RetroAmberTheme: Story = {
  args: {
    config: {
      timezone: 'America/New_York',
      town: 'New York',
      id: 'retro-amber-clock',
    },
  },
};

/**
 * Cotton Candy theme - Soft pastel colors
 */
export const CottonCandyTheme: Story = {
  args: {
    config: {
      timezone: 'Asia/Seoul',
      town: 'Seoul',
      id: 'cotton-candy-clock',
    },
  },
};

/**
 * Cherry Blossom theme - Pink and white palette
 */
export const CherryBlossomTheme: Story = {
  args: {
    config: {
      timezone: 'Asia/Tokyo',
      town: 'Tokyo',
      id: 'cherry-blossom-clock',
    },
  },
};

/**
 * Arctic Ice theme - Cool whites and blues
 */
export const ArcticIceTheme: Story = {
  args: {
    config: {
      timezone: 'Europe/Oslo',
      town: 'Oslo',
      id: 'arctic-ice-clock',
    },
  },
};

/**
 * Showcase of all color themes side by side
 */
export const ColorThemeShowcase: Story = {
  args: {
    config: {
      timezone: 'America/New_York',
      town: 'New York',
    },
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem', padding: '1rem' }}>
      <Clock config={{ timezone: 'Pacific/Honolulu', town: 'Honolulu', id: 'ocean-blue-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'America/Los_Angeles', town: 'Los Angeles', id: 'sunset-orange-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'Asia/Tokyo', town: 'Tokyo', id: 'cyberpunk-neon-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'America/Vancouver', town: 'Vancouver', id: 'forest-green-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'Europe/Paris', town: 'Paris', id: 'purple-dream-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'Europe/London', town: 'London', id: 'midnight-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'America/New_York', town: 'New York', id: 'retro-amber-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'Asia/Seoul', town: 'Seoul', id: 'cotton-candy-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'Asia/Tokyo', town: 'Tokyo', id: 'cherry-blossom-clock', showDate: false, showTimezone: false }} />
      <Clock config={{ timezone: 'Europe/Oslo', town: 'Oslo', id: 'arctic-ice-clock', showDate: false, showTimezone: false }} />
    </div>
  ),
};
