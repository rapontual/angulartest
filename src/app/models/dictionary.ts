interface DictionaryModel {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
}

interface Phonetic {
  text: string
  audio: string
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
}

interface Definition {
  definition: string
  example?: string
}

export {
  DictionaryModel,
  Phonetic,
  Meaning,
  Definition
};
