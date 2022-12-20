export interface Pais {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    subregion:      string;
    region:         string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area?:          number;
    timezones:      string[];
    nativeName:     string;
    numericCode:    string;
    flags:          Flags;
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    independent:    boolean;
    capital?:       string;
    altSpellings?:  string[];
    currencies?:    Currency[];
    regionalBlocs?: RegionalBloc[];
    cioc?:          string;
    gini?:          number;
    borders?:       string[];
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1?:  string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:        string;
    name:           string;
    otherNames?:    string[];
    otherAcronyms?: string[];
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}
