/*
  Warnings:

  - You are about to drop the column `nome` on the `credenciais` table. All the data in the column will be lost.
  - You are about to drop the column `rotulo` on the `credenciais` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "credenciais" DROP COLUMN "nome",
DROP COLUMN "rotulo";
