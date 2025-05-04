import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ADD COLUMN "subcategories_id" integer;
  DO $$ BEGIN
   ALTER TABLE "products" ADD CONSTRAINT "products_subcategories_id_subcategories_id_fk" FOREIGN KEY ("subcategories_id") REFERENCES "public"."subcategories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "products_subcategories_idx" ON "products" USING btree ("subcategories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" DROP CONSTRAINT "products_subcategories_id_subcategories_id_fk";
  
  DROP INDEX IF EXISTS "products_subcategories_idx";
  ALTER TABLE "products" DROP COLUMN IF EXISTS "subcategories_id";`)
}
