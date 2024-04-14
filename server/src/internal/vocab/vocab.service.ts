import { db } from "../../db";
import { vocabLevelEnum, vocabs } from "../../db/schema";
import { Vocab } from "./vocab.model";

export const getAllVocabs = async (): Promise<Vocab[]> => {
  return await db.query.vocabs.findMany();
};

export const getVocabsFromLevel = async (level: string): Promise<Vocab[]> => {
  const vocabs = await db.query.vocabs.findMany();
  return vocabs.filter((vocab) => vocab.level === level);
};
