import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const KeysList = pgTable('keyList',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    encryptedText:varchar('encryptedText').notNull(),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('username'),
    date:varchar('date')
})