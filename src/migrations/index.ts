import * as migration_20250504_081122 from './20250504_081122';
import * as migration_20250504_143137 from './20250504_143137';
import * as migration_20250506_100809 from './20250506_100809';

export const migrations = [
  {
    up: migration_20250504_081122.up,
    down: migration_20250504_081122.down,
    name: '20250504_081122',
  },
  {
    up: migration_20250504_143137.up,
    down: migration_20250504_143137.down,
    name: '20250504_143137',
  },
  {
    up: migration_20250506_100809.up,
    down: migration_20250506_100809.down,
    name: '20250506_100809'
  },
];
