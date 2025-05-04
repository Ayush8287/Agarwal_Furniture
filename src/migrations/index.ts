import * as migration_20250503_174750 from './20250503_174750';
import * as migration_20250503_174854 from './20250503_174854';
import * as migration_20250503_175020 from './20250503_175020';

export const migrations = [
  {
    up: migration_20250503_174750.up,
    down: migration_20250503_174750.down,
    name: '20250503_174750',
  },
  {
    up: migration_20250503_174854.up,
    down: migration_20250503_174854.down,
    name: '20250503_174854',
  },
  {
    up: migration_20250503_175020.up,
    down: migration_20250503_175020.down,
    name: '20250503_175020'
  },
];
