import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "categories" ADD COLUMN "subcategories_id" integer;
  DO $$ BEGIN
   ALTER TABLE "categories" ADD CONSTRAINT "categories_subcategories_id_subcategories_id_fk" FOREIGN KEY ("subcategories_id") REFERENCES "public"."subcategories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "categories_subcategories_idx" ON "categories" USING btree ("subcategories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "categories" DROP CONSTRAINT "categories_subcategories_id_subcategories_id_fk";
  
  DROP INDEX IF EXISTS "categories_subcategories_idx";
  ALTER TABLE "categories" DROP COLUMN IF EXISTS "subcategories_id";`)
}
