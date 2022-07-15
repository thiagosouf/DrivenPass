-- CreateTable
CREATE TABLE "cartoes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "numero" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cvc" INTEGER NOT NULL,
    "expiracao" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "virtual" BOOLEAN NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "cartoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cartoes" ADD CONSTRAINT "cartoes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
