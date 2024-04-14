import { Elysia } from "elysia";
import { Vocab } from "./vocab.model";
import { db } from "../../db";
import { getAllVocabs, getVocabsFromLevel } from "./vocab.service";

const vocabRoute = new Elysia({ prefix: "/vocab" });

vocabRoute.get("/", getAllVocabs);
vocabRoute.get("/:level", ({ params: { level } }) => getVocabsFromLevel(level));
