// Generated by Xata Codegen 0.18.0. Please do not edit.
import {
  BaseClientOptions,
  buildClient,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "names",
    columns: [
      { name: "primaryName", type: "string" },
      { name: "birthYear", type: "int" },
      { name: "deathYear", type: "int" },
      { name: "primaryProfession", type: "multiple" },
      { name: "knownForTitles", type: "multiple" },
    ],
  },
  {
    name: "titles",
    columns: [
      { name: "titleType", type: "string" },
      { name: "primaryTitle", type: "string" },
      { name: "originalTitle", type: "string" },
      { name: "isAdult", type: "bool" },
      { name: "startYear", type: "int" },
      { name: "endYear", type: "int" },
      { name: "runtimeMinutes", type: "float" },
      { name: "genres", type: "multiple" },
      { name: "numVotes", type: "int" },
      { name: "averageRating", type: "float" },
    ],
  },
  {
    name: "titleEpisodes",
    columns: [
      { name: "show", type: "link", link: { table: "titles" } },
      { name: "seasonNumber", type: "int" },
      { name: "episodeNumber", type: "int" },
      { name: "episode", type: "link", link: { table: "titles" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Names = InferredTypes["names"];
export type NamesRecord = Names & XataRecord;

export type Titles = InferredTypes["titles"];
export type TitlesRecord = Titles & XataRecord;

export type TitleEpisodes = InferredTypes["titleEpisodes"];
export type TitleEpisodesRecord = TitleEpisodes & XataRecord;

export type DatabaseSchema = {
  names: NamesRecord;
  titles: TitlesRecord;
  titleEpisodes: TitleEpisodesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://sample-databases-v0sn1n.xata.sh/db/imdb",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
